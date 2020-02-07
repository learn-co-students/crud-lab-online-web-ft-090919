import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // alternate
    // const { reviews, restaurantId, deleteReview } = this.props;
    const reviewList = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview} />
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;