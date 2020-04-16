import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as Message from '../constants/Messages';
class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
           <Cart>
               {this.showCartItem(cart)}
           </Cart>
        );
    }
    showCartItem=(cart)=>{
        var result=Message.MSG_CART_EMPTY;
        if(cart.length>0){
            result=cart.map((item,index)=>{
                return(
                    <CartItem key={index}
                        item={item}
                        
                    ></CartItem>
                )
            })
        }
        return result;
    }

}

const mapStateToProps = (state) => {
    return {
        cart:state.Cart,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
