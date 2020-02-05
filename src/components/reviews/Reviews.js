import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    console.log(this.props.reviews)
    return (
      <ul>
        {this.props.reviews.map(review => <Review review={review} removeReview={this.props.removeReview} key={review.id} />)}
      </ul>
    );
  }
};

export default Reviews;