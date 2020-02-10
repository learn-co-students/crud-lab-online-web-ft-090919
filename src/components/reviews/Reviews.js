import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

render() {
  let reviewList = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map((review) => {
    return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
  })

  return(
    <ul>
      {reviewList}
    </ul>
  );
}
};

export default Reviews;



