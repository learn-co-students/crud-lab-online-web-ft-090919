import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: "",
    restaurantId: this.props.restaurant.id
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleInputChange} name="text" />
        <button>Submit Review</button>
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
    this.props.addReview(this.state)
    this.setState({
      text: ""
    })
  }
};

export default ReviewInput;
