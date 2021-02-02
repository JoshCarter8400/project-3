import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeService} from './actions/cartActions'

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeService(id);
    }
    
    render(){
              
        let addedService = this.props.services.length ?
            (  
                this.props.services.map(service=>{
                    return(
                       
                        <li className="collection-item avatar" key={service.id}>
                                    <div className="service-img"> 
                                        <img src={service.img} alt={service.img} className=""/>
                                    </div>
                                
                                    <div className="service-desc">
                                        <span className="title">{service.title}</span>
                                        <p>{service.desc}</p>
                                        <p><b>Price: {service.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {service.quantity}</b> 
                                        </p>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedService}
                    </ul>
                </div>      
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedService,
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeService(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)