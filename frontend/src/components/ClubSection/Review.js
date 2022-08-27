import {useState} from 'react'
import {
  ReviewCard,
  ReviewCardComment,
  ReviewCardRating,
  ReviewCardUser,
  ReviewCardLeft,
  ReviewCardRight,
  DeleteBtn,
  EditButton,
  EditReviewFormWrapper,
} from "./ClubElements";
import EditReviewForm from './EditReviewForm'
import { User  }from '../../globaldata'
import { TbTrashOff, TbTrash } from "react-icons/tb";
import {FiEdit} from 'react-icons/fi'
const Review = ({ review, deleteReview, editReview }) => {
  console.log("review", review);
  const starRating = "★".repeat(review.star_rating);
  const handleDelete = async () => {
    const req = await fetch(`http://localhost:3100/reviews/${review.id}`, {
      method: "DELETE",
    });
    if (req.ok) {
      deleteReview(review.id);
    }
  };
  const [hoveredOver, setHoveredOver] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <>
      <ReviewCard>
        <ReviewCardLeft>
          <ReviewCardUser>{review.reviewer.username}</ReviewCardUser>
          {!editing && <ReviewCardComment>{review.comment}</ReviewCardComment>}
          {editing ? (
            <EditReviewFormWrapper>
              <EditReviewForm
                review={review}
                editReview={editReview}
                setEditing={setEditing}
              />
              <button
                onClick={() => setEditing(false)}
                style={{ border: "none", background: "none", margin: '0 2em', fontSize: '1.6em', cursor: 'pointer' }}
              >
                X
              </button>
            </EditReviewFormWrapper>
          ) : (
            <EditButton
              onClick={() => {
                setEditing(true);
              }}
            >
              <FiEdit style={{ position: "sticky" }} />
            </EditButton>
          )}
        </ReviewCardLeft>
        <ReviewCardRight>
          {User.id === review.reviewer.id && (
            <DeleteBtn
              onClick={handleDelete}
              onMouseOver={() => setHoveredOver(true)}
              onMouseLeave={() => setHoveredOver(false)}
            >
              {hoveredOver ? (
                <TbTrash style={{ fontSize: "1.3em" }} />
              ) : (
                <TbTrashOff />
              )}
            </DeleteBtn>
          )}
          {!editing && <ReviewCardRating>{starRating}</ReviewCardRating>}
        </ReviewCardRight>
      </ReviewCard>
    </>
  );
};

export default Review