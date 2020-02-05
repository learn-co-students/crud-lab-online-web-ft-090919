import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleInputChange} name="text" />
        <button>Submit</button>
      </form>
    );
  }

  handleInputChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ""
    })
  }
};

export default RestaurantInput;
