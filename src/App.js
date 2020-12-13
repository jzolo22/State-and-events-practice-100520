import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import Counter from './Components/Counter'

class App extends Component {

  state = {
    count: 0
  }

  incrementCounter = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <div className="app">
        <Counter count={this.state.count} />
        <DogsList incrementCounter={this.incrementCounter}/>
      </div>
    );
  }
}

export default App;
