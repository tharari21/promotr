import {useState} from 'react'
import {
  ClubSectionContainer,
  ClubSectionWrapper,
  ClubImagesWrapper,
  ClubTitle,
  ClubDescription,
  ClubDetails,
  ClubReviewsWrapper,
  ClubReviewsContainer,
  
} from "./ClubElements";
import Review from "./Review";
import AddReviewForm from "./AddReviewForm";

const ClubSection = ({club}) => {
  console.log(club)
  const [reviews, setReviews] = useState(club.reviews)
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  }
  const deleteReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id))
  }
  const editReview = (updatedReview) => {
    setReviews(reviews.map(review => {
      if (review.id === updatedReview.id) {
        return {...review, ...updatedReview}
      }
      else {
        return review
      }
    }))
  }
  return (
    <>
      <ClubSectionContainer>
        <ClubSectionWrapper>
          <ClubImagesWrapper></ClubImagesWrapper>
          <ClubDetails>
            <ClubTitle>{club.name}</ClubTitle>
            <ClubDescription>{club.description}</ClubDescription>
          </ClubDetails>

          <ClubReviewsContainer>
            <ClubReviewsWrapper>
              {reviews?.map((review) => (
                <Review
                  key={review.id}
                  review={review}
                  deleteReview={deleteReview}
                  editReview={editReview}
                />
              ))}
              <AddReviewForm clubId={club.id} addReview={addReview} />
            </ClubReviewsWrapper>
          </ClubReviewsContainer>
        </ClubSectionWrapper>
      </ClubSectionContainer>
    </>
  );
}

export default ClubSection