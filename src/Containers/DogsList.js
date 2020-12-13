import React, { Component } from "react";
import {apiResponse} from '../api'
import DogCard from "../Components/DogCard";

class DogsList extends Component {

  dogCards = () => {
    return apiResponse.map(dogObj => {
      return <DogCard dogObj={dogObj} incrementCounter={this.props.incrementCounter}/>
    })
  }
  render() {
    return <div className="list">{this.dogCards()}</div>;
  }
}

export default DogsList;
