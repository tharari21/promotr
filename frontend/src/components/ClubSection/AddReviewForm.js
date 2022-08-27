import {useState} from 'react'
import { Form, Input, ReviewFormWrapper, SubmitBtn } from "./ClubElements";
import { FaStar } from "react-icons/fa";

const colors = {
  black: "#111111",
  white: "#ffffff",
};
const AddReviewForm = ({clubId, addReview}) => {
  const [comment, setComment] = useState('')
  const [starRating, setStarRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleClick = (starRating) => {
      setStarRating(starRating);
    };
    
    const handleMouseOver = (newHoverValue) => {
      setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
      setHoverValue(undefined);
    };
    const handleChange= (e) => {
        setComment(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const req = await fetch(
          `http://localhost:3100/clubs/${clubId}/reviews`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              starRating: starRating,
              comment: comment,
              userId: 1,
            }),
        }
        );
        if (req.ok) {
          const res = await req.json()
          addReview({...res.review, reviewer: res.reviewer})
          setComment("")
          setStarRating(0)
        }
    }

  return (
    <>
      <ReviewFormWrapper>
        <Form onSubmit={handleSubmit}>
          <div style={{ padding: "2em" }}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || starRating) > index
                      ? colors.black
                      : colors.white
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>

          <Input onChange={handleChange} value={comment} placeholder="Enter comment here" />

          <SubmitBtn type="submit" />
        </Form>
      </ReviewFormWrapper>
    </>
  );
}

export default AddReviewForm