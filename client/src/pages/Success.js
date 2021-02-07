import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { idbPromise } from '../utils/helpers';
import { ADD_ORDER } from '../utils/mutations';
import { Container } from 'semantic-ui-react';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const services = cart.map(item => item._id);

      if (services.length) {
        const { data } = await addOrder({ variables: { services } });
        const serviceData = data.addOrder.services;

        serviceData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      // setTimeout(() => {
      //   window.location.assign('/');
      // }, 3000);
    }
    saveOrder();
  }, [addOrder]);

  return (
    <Container>
      <h1>Your Order has processed!</h1>
      <h2>Thank You!! You will now be redirected to the homepage</h2>
    </Container>
  );
}

export default Success;
