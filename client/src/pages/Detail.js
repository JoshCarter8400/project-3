import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { idbPromise } from '../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_SERVICES,
} from '../utils/actions';
import { Image, Container, Header, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import { QUERY_ALL_SERVICES } from '../utils/queries';

const Detail = () => {
  const state = useSelector((state) => {
    return state;
  });
  const [currentService, setCurrentService] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_ALL_SERVICES);

  const { services, cart } = state;
  // const service = data?.service || {};

  useEffect(() => {
    // already in store
    if (services.length) {
      setCurrentService(services.find((service) => service._id === id));
    } // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_SERVICES,
        services: data.services,
      });

      data.services.forEach((service) => {
        idbPromise('services', 'put', service);
      });
    }

    // get cache from idb
    else if (!loading) {
      idbPromise('services', 'get').then((indexedServices) => {
        dispatch({
          type: UPDATE_SERVICES,
          services: indexedServices,
        });
      });
    }
  }, [services, data, loading, dispatch, id, currentService]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });

      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        service: { ...currentService, purchaseQuantity: 1 },
      });
      // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
      idbPromise('cart', 'put', { ...currentService, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentService._id,
    });
    // upon removal from cart, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
    idbPromise('cart', 'delete', { ...currentService });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container style={{ textAlign: 'center' }}>
        <Image
          src={`/images/${currentService.image}`}
          size="small"
          centered
          style={{ marginTop: 2 + 'em', marginBottom: 2 + 'em' }}
        />
        <Header style={{ marginTop: 1 + 'em', textAlign: 'center' }}>
          {currentService.name}
        </Header>
        <p>{currentService.description}</p>
        <p>
          Price: ${currentService.price}
          <br />
          <Button onClick={addToCart} primary as={Link} to="/cart">
            Add to cart
          </Button>
          <Button
            disabled={!cart.find((p) => p._id === currentService._id)}
            onClick={removeFromCart}
          >
            Remove from Cart
          </Button>
        </p>
      </Container>
      <p
        style={{
          marginTop: 2 + 'em',
          marginBottom: 2 + 'em',
          textAlign: 'center',
        }}
      >
        Icons made by{' '}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
      <Cart />
    </>
  );
};

export default Detail;
