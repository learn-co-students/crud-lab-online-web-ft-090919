import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurants={this.props.addRestaurant} />
        <Restaurants
              restaurants={this.props.restaurants}
              deleteRestaurants={this.props.deleteRestaurant}
        />
      </div>
    );
  }
}

export default RestaurantsContainer
