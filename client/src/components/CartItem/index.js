import react from 'react';
import { Item } from 'semantic-ui-react';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY} from "../../utils/actions";
import {idbPromise} from "../../utils/helpers";
import { useDispatch } from 'react-redux';

const CartService = ({service}) => {
    
    const dispatch =useDispatch();

    const removeFromCart = service => {
        dispatch({
        type: REMOVE_FROM_CART,
        _id: service._id}
        );

        idbPromise('cart', 'delete', {...service});
        };


const onChange = (e) => {
    const value = e.target.value;
    if(value === "0") {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: service._id
        });
        idbPromise('cart', 'delete', {...service});
    } else {
        dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: service._id,
            purchaseQuantity: parseInt(value)
        });
        idbPromise('cart', 'put', { ...service, purchaseQuantity: parseInt(value) });
    }
};

return (
    <div className="flex-row">
        <div>
            <img src = {require(`../../assets/${service.image}`).default} alt = "" />
        </div>
        <div>
            <div>{service.name}, ${service.price}</div>
            <div>
                <span>Qty:</span>
                <input 
                    type = "number"
                    placeholder = "1"
                    value={service.purchaseQuantity}
                    onChange={onChange}
                />
                <span
                    role="img"
                    aria-label="trash"
                    onClick={() => removeFromCart(service)}
                >
                    
                </span>
            </div>
        </div>
    </div>
);
}


export default CartService;