import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Image, Segment, Input, Button, Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

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
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <Segment fluid>
      <Image size="small" src={`/images/${item.image}`} centered></Image>

      <Segment.Group >
        <Segment inverted color="blue" as="h2">
          {item.name} — ${item.price}
        </Segment>
        <Segment textAlign="center" >
          <Button as="div" labelPosition="left">
            <Label color="blue" >
              Qty:
              <Input
                type="number"
                placeholder="1"
                value={item.purchaseQuantity}
                onChange={onChange}
                
              />
            </Label>
            <Button
              color="teal"
              icon="trash"
              onClick={() => removeFromCart(item)}
              compact
            />
          </Button>
        </Segment>
      </Segment.Group>
    </Segment>
  );
};

export default CartItem;
