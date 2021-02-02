import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../utils/cart-actions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let serviceList = this.props.services.map(service=>{
            return(
                <div className="card" key={service.id}>
                        <div className="card-image">
                            <img src={service.img} alt={service.title}/>
                            <span className="card-title">{service.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(service.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{service.desc}</p>
                            <p><b>Price: {service.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our services</h3>
                <div className="box">
                    {serviceList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      services: state.services
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)