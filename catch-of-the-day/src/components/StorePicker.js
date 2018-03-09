import React, { Component, Fragment, createRef } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = createRef(); // creates reference for input

  goToStore = e => { //can be written this way to bind this property to this, instead of binding in constructor
    e.preventDefault()
    const storeName = this.myInput.value.value;

    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      // Fragment allows adjacent elements, returns no element
      <Fragment>
        <form onSubmit={this.goToStore} className='store-selector' action="">
          <h2>Hey</h2>
          <input ref={this.myInput} type="text" required placeholder='Store Name' defaultValue={getFunName()} />
          <button type='submit'>Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;