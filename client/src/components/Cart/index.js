import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeService,addQuantity,subtractQuantity} from './actions/cartActions'
class Cart extends Component{

    //to remove the service completely
    handleRemove = (id)=>{
        this.props.removeService(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedServices = this.props.services.length ?
            (  
                this.props.services.map(service=>{
                    return(
                       
                        <li className="collection-service avatar" key={service.id}>
                                    <div className="service-img"> 
                                        <img src={service.img} alt={service.img}/>
                                    </div>                         
                                    <div className="service-desc">
                                        <span className="title">{service.title}</span>
                                        <p>{service.desc}</p>
                                        <p><b>Price: {service.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {service.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(service.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(service.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(service.id)}}>Remove</button>
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
                        {addedServices}
                    </ul>
                </div>      
            </div>
       )
    }
}
const mapStateToProps = (state)=>{
    return{
        services: state.addedServices
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeservice: (id)=>{dispatch(removeService(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)