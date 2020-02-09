import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const {restaurant, reviews, addReview, deleteReview} = this.props
    return (
      <div>
        <ReviewInput restaurantId={restaurant.id} addReview={addReview}/>
        <Reviews reviews={reviews} restaurantId={restaurant.id} deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const reviews = state.reviews.filter(review => review.restaurantId === props.restaurant.id)
  return {reviews: reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: 'ADD_REVIEW', review: review }),
  deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId: reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
