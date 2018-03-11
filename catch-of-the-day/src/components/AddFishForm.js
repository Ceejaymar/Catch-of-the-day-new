import React, { Component, createRef } from 'react';

class AddFishForm extends Component {
  nameRef = createRef();
  priceRef = createRef();
  statusRef = createRef();
  descRef = createRef();
  imageRef = createRef();

  createFish = (e) => {
    e.preventDefault();
    
    const fish = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value),
      statusRef: this.priceRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value
    }
  }

  render() {
    return (
        <form className='fish-edit' onSubmit={this.createFish}>
          <input name='name' ref={this.nameRef} type='text' placeholder='Name' />
          <input name='price' ref={this.priceRef} type='text' placeholder='Price' />
          <select name='status' ref={this.statusRef}>
            <option value='available'>Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name='desc' ref={this.descRef} type='text' placeholder='Desc' />
          <input name='image' ref={this.imageRef} type='text' placeholder='Image' />
          <button type='subit'>+ Add Fish</button>
        </form>
    )
  }
}

export default AddFishForm;