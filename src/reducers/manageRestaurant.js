import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return {...state, restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(res => res.id !== action.payload)}
    case 'ADD_REVIEW':
      const review = {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}
      return {...state, reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(review => review.id !== action.reviewId)}
    default:
        return state
  }
}
