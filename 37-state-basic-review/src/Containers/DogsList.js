import React, { Component } from "react";
import { apiResponse } from "../api.js"
import DogCard from '../Components/DogCard'

class DogList extends Component {
  render() {
    return <div className="dogContainer">{apiResponse.map(dog_object => <DogCard key={dog_object.id} dog={dog_object} />)}</div>;
  }
}

export default DogList;
