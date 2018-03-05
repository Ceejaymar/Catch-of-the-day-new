import React, { Component, Fragment } from 'react';

class StorePicker extends Component {
  render() {
    return (
      // Fragment allows adjacent elements, returns no element
      <Fragment>
        <form className='store-selector' action="">
          <h2>Hey</h2>
          <input type="text" required placeholder='Store Name' />
          <button type='submit'>Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;