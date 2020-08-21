import React from "react";
import { connect } from 'react-redux'
const BeyCard = (props) => {

  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img onClick={() => props.clickHandler(props.bey.id)} alt="" src={props.bey.img} />
    </div>
  );
};


function mdp(dispatch) {
  return { clickHandler: () => dispatch() }
}

export default connect(null, mdp)(BeyCard);

