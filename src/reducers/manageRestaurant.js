
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={ restaurants: []}, action) {
    switch (action.type){
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuidFn(),
                text: action.restaurant
            }
            return { ...state, restaurants: [...state.restaurants, restaurant]}

        case 'DELETE_RESTAURANT':
            console.log('big delete, action')
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        default:
            return state;
    }

}
