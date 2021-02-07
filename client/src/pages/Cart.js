import React, { useEffect } from 'react';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { idbPromise } from '../utils/helpers';
import { QUERY_CHECKOUT } from '../utils/queries';
import { useLazyQuery } from '@apollo/react-hooks';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Header, Segment, Container, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import {removeService} from './actions/cartActions'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, services: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const serviceIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        serviceIds.push(item._id);
      }
    });

    getCheckout({
      variables: { services: serviceIds },
    });
  }

  return (
    <Container text>
    <br/>
      <Segment inverted color="blue">
          <Header
            textAlign="center"
            as="h1"
            style={{ margin: "0.25em 0em", fontSize: "3em"}}
            fluid
          >
            Your Cart
          </Header>
          <Image src="\images\cart.jpg" centered fluid />
        </Segment>
        
        <br/>
      {state.cart.length ? (
        <Container text textAlign="center">
          
          
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item}/>
          ))}
          
          

          <Segment textAlign="center">
            <strong>Total: ${calculateTotal()} </strong>

            {Auth.loggedIn() ? (
              <Button onClick={submitCheckout} color="teal">Checkout</Button>
            ) : (
              <span>Please Log In to Checkout</span>
            )}
          </Segment>
        </Container>
      ) : (
        <Header as="h4" style={{ fontSize: '1em' }}>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your Shopping Cart
        </Header>
      )}
    
    </Container>
  );
};

export default Cart;
