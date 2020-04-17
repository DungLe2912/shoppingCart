import React, { Component } from 'react';

class Product extends Component {
    showRatting(ratting) {
        var result=[];
        if (ratting > 0) {
            for (var i = 0; i < ratting; i++) {
                result.push(<i key={i} className="fa fa-star"></i>);
            }

        }
        for (var j = 0; j < (5 - ratting); j++) {
            result.push(<i key={j+i}className="fa fa-star-o"></i>);
        }

        return result;
    }
    render() {
        return (

            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={this.props.product.image} className="img-fluid" alt={this.props.product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{this.props.product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRatting(this.props.product.ratting)}
                            </li>

                        </ul>
                        <p className="card-text">
                            {this.props.product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{this.props.product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" onClick={()=>this.onAddToCart(this.props.product)}/>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart=(product)=>{
        this.props.onAddToCart(product);
    }
}

export default Product;