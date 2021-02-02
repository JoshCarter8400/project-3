import { ADD_TO_CART,REMOVE_SERVICE,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../utils/actions'

import Service1 from '../assets/broom.svg'
import Service2 from '../assets/magnifying-glass.svg'
import Service3 from '../assets/online-shopping.svg'
import Service4 from '../assets/responsive-design.svg'
import Service5 from '../assets/seo-search-symbol.svg'
import Service6 from '../assets/wheelchair.svg'
import Service7 from '../assets/world-wide-web.svg'


const initState = {
  services: [
      {id:1,title:'broom', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Service1},
      {id:2,title:'magnifying-glass', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Service2},
      {id:3,title:'online-shopping', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Service3},
      {id:4,title:'responsive-design', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Service4},
      {id:5,title:'seo-search-symbol', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Service5},
      {id:6,title:'wheelchair', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Service6},
      {id:7,title:'world-wide-web', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Service7}

  ],
  addedServices:[],
  total: 0

}
const cartReducer= (state = initState,action)=>{
 
  //INSIDE HOME COMPONENT
  if(action.type === ADD_TO_CART){
        let addedService = state.services.find(service=> service.id === action.id)
        //check if the action id exists in the addedServices
       let existed_service= state.addedServices.find(service=> action.id === service.id)
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
      let serviceToRemove= state.addedServices.find(service=> action.id === service.id)
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
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
      let addedService = state.services.find(service=> service.id === action.id)
        addedService.quantity += 1 
        let newTotal = state.total + addedService.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedService = state.services.find(service=> service.id === action.id) 
      //if the qt == 0 then it should be removed
      if(addedService.quantity === 1){
          let new_services = state.addedServices.filter(service=>service.id !== action.id)
          let newTotal = state.total - addedService.price
          return{
              ...state,
              addedServices: new_services,
              total: newTotal
          }
      }
      else {
          addedService.quantity -= 1
          let newTotal = state.total - addedService.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }

  if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
}
  
else{
  return state
  }
  
}



export default cartReducer;