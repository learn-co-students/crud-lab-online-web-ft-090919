import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  // constructor(props){
  //   super(props)
  //    
  //   this.state = {
  //     restaurantId: props.restaurantId
  //     text: '',
  //   }
  // }
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Review: </label>
          <input type='textarea' value={this.state.text} name='text' onChange={this.handleChange} />
          <input type='submit' value='Submit Review' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
