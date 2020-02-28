import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

import { connect } from 'react-redux'
import Restaurant from '../components/restaurants/Restaurant'

class ReviewsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurant={this.props.restaurant} restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    reviews: state.reviews.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: payload => dispatch({type: 'ADD_REVIEW', payload}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
