
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageReviews(state={reviews: []}, action) {
    switch (action.type){
        case 'ADD_REVIEW':
            const review = {
                id: cuidFn(),
                text: action.payload.text,
                restaurantId: action.payload.restaurantId
            }
            return { ...state, reviews: [...state.reviews, review]}

        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

        default:
            return state;
    }

}
