import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const { restaurants, deleteRestaurant } = this.props;
    // const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} deleteRestaurant ={this.props.deleteRestaurant} />)
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
        />
      )
    });
    
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;