import React from "react";
import "./App.css";
import beyArray from './api'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends React.Component {

  state = {
    beyArray: beyArray
  }

  clickHandler = (id) => {
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find(beyObj => beyObj.id === id)
    foundObj.favorite = !foundObj.favorite
    this.setState({ beyArray: newArray })
  }
  favoriteClickHandler = (id) => {
    let newArray = [...this.state.beyArray]
    let foundObj = newArray.find(beyObj => beyObj.id === id)
    foundObj.favorite = !foundObj.favorite
    this.setState({ beyArray: newArray })
    window.alert("I got a hot sauce in my bag, swag")
  }

  filteredBeys = () => {
    console.log("Current State in App:", this.state)
    return this.state.beyArray.filter(beyObj => beyObj.favorite)
  }

  render() {
    return (
      <div className="container">
        <BeyContainer beys={beyArray} clickHandler={this.clickHandler} />
        <Favorites beys={this.filteredBeys()} clickHandler={this.favoriteClickHandler} />
      </div>
    );
  }
};

export default App;
