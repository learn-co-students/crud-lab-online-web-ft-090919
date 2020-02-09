import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    const {addRestaurant, restaurants, deleteRestaurant} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})

const mapDispatchToProps = dispatch => ({
  addRestaurant: restaurant => dispatch({type: 'ADD_RESTAURANT', text: restaurant.text}),
  deleteRestaurant: restaurantId => dispatch({type: 'DELETE_RESTAURANT', payload: restaurantId})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
