import React from "react";
import "./App.css";
import beyArray from './api'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import CreateForm from "./CreateForm";
import Search from "./Search";

class App extends React.Component {

  state = {
    beyArray: beyArray,
    searchValue: ""
  }

  changeHandler = (e) => {
    console.log("changing")
    this.setState({ searchValue: e.target.value })
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

  filteredFavoriteBeys = () => {
    return this.state.beyArray.filter(beyObj => beyObj.favorite).filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  filteredContainerBeys = () => {
    return this.state.beyArray.filter(bey => bey.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  submitHandler = (obj) => {
    this.setState({ beyArray: [obj, ...this.state.beyArray] })

  }

  render() {
    return (
      <div className="container">
        <CreateForm submitHandler={this.submitHandler} />
        <br />
        <Search searchValue={this.state.searchValue} changeHandler={this.changeHandler} />
        <BeyContainer beys={this.filteredContainerBeys()} clickHandler={this.clickHandler} />
        <Favorites beys={this.filteredFavoriteBeys()} clickHandler={this.favoriteClickHandler} />
      </div>
    );
  }
};

export default App;
