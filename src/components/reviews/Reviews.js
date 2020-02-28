import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  const restaurauntReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  // state.reviews.filter(review => review.id !== action.id)
    return (
      <ul>
        {restaurauntReviews.map((review) => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />) }
      </ul>
    );
  }
};

export default Reviews;