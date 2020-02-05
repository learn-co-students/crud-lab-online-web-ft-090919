export const addReview = (review) => {
  return ({
    type: "ADD_REVIEW",
    payload: review
  })
}

export const removeReview = (id) => {
  return ({
    type: "REMOVE_REVIEW",
    payload: id
  })
}