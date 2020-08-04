import React from "react";

// props => { dog: {name: , img: }, cat: {} }
// { dog }


class DogCard extends React.Component {

  state = { clicked: false }

  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  bark = () => {
    if (this.state.clicked) {
      return <h2 className="bark">Ruff</h2>
    } else {

    }
  }

  // Curlys in JSX can only evaluate JS expressions
  // var = condition1 == something ? true:false

  render() {
    return (
      <div>
        <h2 >{this.props.dog.name}</h2>
        {this.state.clicked ? <h2 className="bark">Ruff</h2> : null}
        {/* {this.bark()} */}
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.clickHandler} className="bark">Bark</button>
      </div>
    );
  }
}

export default DogCard;
