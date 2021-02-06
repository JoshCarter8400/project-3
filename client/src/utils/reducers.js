import {
  UPDATE_SERVICES,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  ADD_ORDER,
} from './actions';

const initialState = {
  services: [],
  cart: [],
  cartOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SERVICES:
      return {
        ...state,
        services: [...action.services],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.service],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.services],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((service) => {
          if (action._id === service._id) {
            service.purchaseQuantity = action.purchaseQuantity;
          }
          return service;
        }),
      };

    case ADD_ORDER:
      return {
        ...state,
        orders: [...action.orders],
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((service) => {
        return service._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducer;
