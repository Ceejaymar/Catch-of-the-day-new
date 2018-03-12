import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
  
  render() {
    const {name, price, image, status, desc} = this.props.details;
    const isAvailable = status === 'available';
    const buttonText = isAvailable ? 'Add to Cart' : 'Sold Out!' ;

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>{ buttonText }</button>
      </li>
    )
  }
}

export default Fish;