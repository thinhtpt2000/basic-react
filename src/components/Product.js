/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="Product col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card">
                    <img className="card-img-top" src={ this.props.image } alt={ this.props.children + " overview"} />
                    <div className="card-body">
                    <h5 className="card-title">{ this.props.children }</h5>
                    <p className="card-text">{ this.props.price } VND</p>
                    </div>
                    <div className="card-body">
                    <a href="#" className="card-link">Buy now</a>
                    <a href="#" className="card-link">Add to cart</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;