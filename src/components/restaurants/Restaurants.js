import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} removeRestaurant={this.props.removeRestaurant} key={restaurant.id} />)}
      </ul>
    );
  }
};

export default Restaurants;