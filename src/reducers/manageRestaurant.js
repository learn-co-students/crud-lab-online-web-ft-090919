
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {

  

  switch(action.type){
    case "ADD_RESTAURANT":
      return (
        [...state, {...action.payload, id: cuid()}]
      )
    case "REMOVE_RESTAURANT":
      return (
        state.filter(restaurant => restaurant.id !== action.payload)
      )  
    default:
      return state  
  }

}
