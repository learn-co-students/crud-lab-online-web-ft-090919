import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

import {addRestaurant, removeRestaurant} from  '../actions/restaurantActions'


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant}/>
      </div>
    )
  }
}

export default connect((state)=>({ restaurants: state.restaurants }), { addRestaurant, removeRestaurant })(RestaurantsContainer)
