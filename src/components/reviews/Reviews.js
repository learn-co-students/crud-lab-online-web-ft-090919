import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const renderFilteredReviews = filteredReviews.map(filteredReview => <Review key={filteredReview.id} review={filteredReview} deleteReview={deleteReview} />)
    return (
      <ul>
        {renderFilteredReviews}
      </ul>
    );
  }
};

export default Reviews;