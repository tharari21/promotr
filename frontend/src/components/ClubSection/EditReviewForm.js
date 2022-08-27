import {useState} from 'react'
import {FaStar} from 'react-icons/fa'
const EditReviewForm = ({ review, editReview, setEditing }) => {
  const [comment, setComment] = useState(review.comment);
  const [starRating, setStarRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (starRating) => {
    setStarRating(starRating);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedReview = { star_rating: starRating, comment: comment };
    const req = await fetch(`http://localhost:3100/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    });
    if (req.ok) {
        const res = await req.json()

      console.log(" edited");
      editReview(res.review);
      setEditing(false)
    } else {
      console.log("Not edited");
    }
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <>
      <form
        style={{ display: "flex", justifyContent: "center", height: "30px" }}
        onSubmit={handleSubmit}
      >
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{
            height: "40px",
            width: "200px",
            margin: "0 3em",
            borderRadius: "9px",
          }}
        />
        <div style={{ margin: "0 3em" }}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={18}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || starRating) > index ? "#111111" : "#999999"
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <input type="submit" style={{ cursor: "pointer", width: "64px", backgroundColor: '#111', color: '#fff' }} />
      </form>
    </>
  );
};

export default EditReviewForm