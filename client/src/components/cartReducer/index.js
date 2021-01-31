import { ADD_TO_CART,REMOVE_SERVICE } from '../actions/action-types/cartActions';
import ServiceItem from '../ServiceItem';


const cartReducer= (state = ServiceItem)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedService = state.services.find(service=> service.id === action.id)
          //check if the action id exists in the addedItems
         let existed_service= state.addedServicess.find(service=> action.id === service.id)
         if(existed_service)
         {
            addedService.quantity += 1 
             return{
                ...state,
                 total: state.total + addedService.price 
                  }
        }
         else{
            addedService.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedService.price 
            
            return{
                ...state,
                addedServices: [...state.addedServices, addedService],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_SERVICE){
        let serviceToRemove= state.addedService.find(service=> action.id === service.id)
        let new_services = state.addedServices.filter(service=> action.id !== service.id)
        
        //calculating the total
        let newTotal = state.total - (serviceToRemove.price * serviceToRemove.quantity )
        console.log(serviceToRemove)
        return{
            ...state,
            addedServices: new_services,
            total: newTotal
        }
    }
    else{
        return
    }
    
    


 
    
 
}

export default cartReducer