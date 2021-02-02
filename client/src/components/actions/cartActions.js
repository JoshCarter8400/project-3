import { ADD_TO_CART,REMOVE_SERVICE} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeService=(id)=>{
    return{
        type: REMOVE_SERVICE,
        id
    }
}
