export function addReview(review) {
    return {type: "ADD_REVIEW", review};
}

export function deleteReview(id) {
    return {type: "DELETE_REVIEW", id};
}
