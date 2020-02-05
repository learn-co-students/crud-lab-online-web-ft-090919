import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { addReview, removeReview} from '../actions/reviewActions'
import { connect } from 'react-redux'
import { filterReviewsByRestaurantId } from '.././selectors/reviewSelectors'

class ReviewsContainer extends Component {

  

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={filterReviewsByRestaurantId(this.props.reviews, this.props.restaurant.id)} removeReview={this.props.removeReview} />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { reviews: state.reviews}
}

export default connect(mapStateToProps, { addReview, removeReview})(ReviewsContainer)
