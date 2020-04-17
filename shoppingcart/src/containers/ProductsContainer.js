import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import * as actions from '../actions/index';

class ProductsContainer extends Component {

    render() {
        var { products } = this.props;
        return (
            <Products> 
                {this.showProducts(products)}
            </Products>

        );
    }
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} onAddToCart={this.props.onAddToCart} />
            })
        }
        return result;
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.Products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart:(product)=>{
            dispatch(actions.addToCart(product,1))
        },
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
