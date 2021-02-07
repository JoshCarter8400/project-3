import React from 'react';
import { idbPromise } from '../utils/helpers';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Logout() {
  async function clearCart() {
    const cart = await idbPromise('cart', 'get');
    if (cart.length) {
      cart.forEach((item) => {
        idbPromise('cart', 'delete', item);
      });
    }
  }
  clearCart();
  setTimeout(() => {
    window.location.assign('/');
  }, 3000);

  return (
    <Container>
      <h1>You have been successfully logged out!!</h1>
      <h2>Thank You!! We look forward to seeing you soon</h2>
    </Container>
  );
}

export default Logout;
