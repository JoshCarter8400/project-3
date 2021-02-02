import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { Image, Segment, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CartItem = ({ item }) => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <Segment>
      <Segment>
        <Image src={`/assets/${item.image}`}></Image>
      </Segment>
      <Segment>
        <Segment>
          {item.name}, ${item.price}
        </Segment>
        <Segment>
          <span>Qty:</span>
        </Segment>
        <Input
          type="number"
          placeholder="1"
          value={item.purchaseQuantity}
          onChange={onChange}
        />
        <span
          role="img"
          aria-label="trash"
          onClick={() => removeFromCart(item)}
        >
          🗑️
        </span>
      </Segment>
    </Segment>
  );
};

export default CartItem;
