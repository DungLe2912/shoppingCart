import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Message from '../constants/Messages';
import * as actions from '../actions/index';
class CartContainer extends Component {

    render() {
        var { cart } = this.props;
       // console.log(cart);
        return (
           <Cart>
               {this.showCartItem(cart)}
               {this.showCartResult(cart)}
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
                        increaseQuantity={this.props.increaseQuantity}
                    ></CartItem>
                )
            })
        }
        return result;
    }

    showCartResult=(cart)=>{
        var result=null;
        if(cart.length>0){
            result=<CartResult cart={cart}/>
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
        increaseQuantity:(product)=>{
            dispatch(actions.increaseQuantity(product))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
