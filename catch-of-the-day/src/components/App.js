import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
  // Alternative way of creating state
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    const fishes = {...this.state.fishes}

    fishes[`fish${Date.now()}`] = fish;

    this.setState({ fishes })
  }

  loadSampleFishes = () => { // Any methods that update state should live in the main 'app' where state is created
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Seafood' />
          <ul className="fishes">
            { Object.keys(this.state.fishes).map(fish => <Fish key={fish} details={this.state.fishes[fish]} />) }
          </ul>
        </div>
        <Order />
        <Inventory addFish ={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;