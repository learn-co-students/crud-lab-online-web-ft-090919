import { combineReducers } from 'redux';
import manageRestaurants from './manageRestaurant';
import manageReviews from './manageReviews'

export const allReducers = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})