import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.CreateRef();
  constructor() {
    super()

    // this.goToStore = this.goToStore.bind(this);
  }

  goToStore = (e) => { //can be written this way to bind this property to this, instead of line #9
    e.preventDefault()

    console.log("At the store");
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