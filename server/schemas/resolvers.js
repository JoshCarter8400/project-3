const { User, Review, Service } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('reviews');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    reviews: async (parent, { username }, context) => {
      const params = username ? { username } : {};
      return Review.find({ username: context.user.username }).sort({
        createdAt: -1,
      });
    },
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },
    users: async () => {
      return User.find().select('-__v -password').populate('reviews');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('reviews');
    },
    services: async () => {
      return Service.find();
    },
    service: async (parent, { _id }) => {
      return await Service.findById(_id);
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.services',
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ services: args.services });
      const { services } = await order.populate('services').execPopulate();

      const line_items = [];

      for (let i = 0; i < services.length; i++) {
        // generate product id
        const service = await stripe.services.create({
          name: services[i].name,
          description: services[i].description,
          images: [`${url}/assets/${services[i].image}`],
        });

        // generate price id using the product id
        const price = await stripe.prices.create({
          service: service.id,
          unit_amount: service[i].price * 100,
          currency: 'usd',
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addReview: async (parent, args, context) => {
      if (context.user) {
        const review = await Review.create({
          ...args,
          username: context.user.username,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { reviews: review._id } },
          { new: true }
        );
        return review;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addOrder: async (parent, { services }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ services });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateService: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Service.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
