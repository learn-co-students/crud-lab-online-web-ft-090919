export const filterReviewsByRestaurantId = (reviews, restaurantId) => {
  return (
    reviews.filter(review => review.restaurantId === restaurantId)
  )
}