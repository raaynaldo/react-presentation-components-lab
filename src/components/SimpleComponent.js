// Code SimpleComponent Here
import React, { Component } from "react";

export class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mood: "happy",
    };
  }

  handleClick = () => {
    const mood = {
      happy: "sad",
      sad: "happy",
    };

    this.setState({
      mood: mood[this.state.mood],
    });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
