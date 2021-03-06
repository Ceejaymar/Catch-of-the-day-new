import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';

    if(!isAvailable) {
      return <li>Sorry { fish ? fish.name : 'fish' } is not available! </li>
    }

    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const isAvailable = fish && fish.status === 'available';
      const fish = this.props.fishes[key];
      const count = this.props.order[key];

      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }

      return prevTotal;
    }, 0) 

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className='order'>
          { orderIds.map(this.renderOrder)}  {/* separated the return li into separate render, keeps it a little cleaner*/}
        </ul>
        <div className="total">
          Total:
          <strong>{ formatPrice(total) }</strong>
        </div>
      </div>
    )
  }
}

export default Order;