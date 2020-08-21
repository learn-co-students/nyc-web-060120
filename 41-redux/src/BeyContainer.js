import React from "react";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {
  render() {
    console.log("props in Container: ", this.props.beys)
    let allBeys = this.props.beys.map(bey => <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler} />)
    return (
      <div className="index">
        <h1>Index</h1>
        {allBeys}
      </div>
    );
  }
}

export default BeyContainer;
