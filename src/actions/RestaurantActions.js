export function addRestaurant(restaurant) {
    return {type:'ADD_RESTAURANT', restaurant};
}

export function deleteResaurant(id) {
    return {type:'DELETE_RESTAURANT', id};
}
