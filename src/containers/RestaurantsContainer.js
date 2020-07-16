import React, { Component } from 'react'
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { addRestaurant, deleteResaurant } from '../actions/RestaurantActions';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteResaurant={this.props.deleteResaurant}/>
      </div>
    )
  }
}

const mapState = ({restaurants}) => ({restaurants});
export default connect(mapState, { addRestaurant, deleteResaurant })(RestaurantsContainer);
