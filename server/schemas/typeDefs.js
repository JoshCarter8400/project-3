// import the GraphQL tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type Service {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    services: [Service]
  }

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    reviews: [Review]
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(_id: ID!): Review
    services: [Service]
    service(_id: ID!): Service
    order(_id: ID!): Order
    checkout(services: [ID]!): Checkout
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    addReview(reviewText: String!): Review
    addOrder(services: [ID]!): Order
    updateService(_id: ID!, quantity: Int!): Service
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
