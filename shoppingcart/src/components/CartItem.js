import React, { Component } from 'react';

class CartItem extends Component {
    render() {
      var{item}=this.props;
     // console.log(item.product);
        return (
            <tr>
            <th scope="row">
              <img src={item.product.image} className="img-fluid z-depth-0" />
            </th>
            <td>
              <h5>
                <strong>{item.product.name}</strong>
              </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
              <span className="qty">{item.quantity} </span>
              <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light" onClick={()=>this.decreaseQuantity(item)}>
                  <a>—</a>
                </label>
                <label className="btn btn-sm btn-primary
                                  btn-rounded waves-effect waves-light" onClick={()=>this.increaseQuantity(item)}>
                  <a>+</a>
                </label>
              </div>
            </td>
            <td>{this.showTotal(item.product.price,item.quantity)}$</td>
            <td>
              <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item" onClick={()=>this.deleteCartItem(item)}>
                X
          </button>
            </td>
          </tr>
    
        );
    }
    showTotal=(price,quantity)=>{
      return price*quantity;
    }
    increaseQuantity=(product)=>{
      this.props.increaseQuantity(product);
    }
    decreaseQuantity=(product)=>{
      this.props.decreaseQuantity(product);
    }
    deleteCartItem=(product)=>{
      this.props.deleteCartItem(product);
    }
}

export default CartItem;