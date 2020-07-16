import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, deleteReview } from '../actions/ReviewActions';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}
const mapState = ({ reviews }) => ({ reviews });
export default connect(mapState, { addReview, deleteReview })(ReviewsContainer);
