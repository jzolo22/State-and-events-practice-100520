import React from "react";

class DogCard extends React.Component {

  state = {
    beenClicked: false
  }

  handleBarkClick = () => {
    this.setState((prevState) => ({beenClicked: !prevState.beenClicked}))
    if (!this.state.beenClicked) {
      this.props.incrementCounter()
    }
  }

  render() {
    return (
      <div className="card">
        <span className="content">
        <h2 >{this.props.dogObj.name}</h2>
          <img alt={this.props.dogObj.name} src={this.props.dogObj.img} />
        </span>
        <span className="bark">
          <button onClick={this.handleBarkClick}>Bark</button>
        </span>
        <h2>{this.state.beenClicked ? "Bark": ""}</h2>
      </div>
    );
  }
}

export default DogCard;
