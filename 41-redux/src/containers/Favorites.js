import React, { Component } from "react";
import BeyCard from '../components/BeyCard'

export default class Favorites extends Component {
  render() {
    let beys = this.props.beys.map(bey => <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler} />)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {beys}
      </div>
    );
  }
}

// function msp(state) {
//   // let filteredBeys = // filter through state.beys for all the favorites
//   return { beys: fitleredBeys  }
// }
