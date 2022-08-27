import styled from 'styled-components'

export const ClubSectionContainer = styled.div`
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 221, 0.2) 0%,
      rgba(0, 0, 255, 0.8) 100%
    ),
    linear-gradient(180deg, rgba(0, 122, 225, 0.2) 0%, transparent 100%);
    padding-left: 6em;
    padding-bottom: 6em;
`;
export const ClubSectionWrapper = styled.div`
  
`
export const ClubDetails = styled.div`

`
export const ClubTitle = styled.h1`
  font-size: 5em;
  font-weight: bold;
  text-transform: uppercase;
  padding: 3rem;
`;
export const ClubDescription = styled.p`
  font-size: 1.6em;
  padding: 1em 1em 1em 5em;
  width: 70%;
  @media screen and (max-width: 900px) {
    width: 100%
  }
`
export const ClubReviewsContainer = styled.div`
    
    
    `
export const ClubReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 5em;
`;
export const ReviewCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 2em;
  background: white;
  max-height: 100px;
  overflow-y: scroll;
  border-radius: 40px;
  padding: 1em 2em;
`;
export const ReviewCardComment = styled.div`
  /* padding-top: 1em; */
  padding-left: 5em;
  margin-left: 2em;
`
export const ReviewCardRating = styled.div`
  font-size: 1.5em;
  padding-top: 20px;
  
`
export const ClubImagesWrapper = styled.div``
export const ReviewCardUser = styled.div`
  font-size: 1.4em;
  font-weight: bold;
`
export const ReviewCardLeft = styled.div`
`
export const ReviewCardRight = styled.div`
  position: relative;
`;
export const ReviewFormWrapper = styled.div`
  height: 140px;
  border-radius: 40px;
  background: rgba(0,0,0,0.3);
`
export const Form = styled.form`
  padding: 1.2em;
  display: flex;
`
export const Input = styled.input`
  background: none;
  border: none;
  border-radius: 16px;
  font-size: 2em;
  padding: 15px;
  width: 60%;
  height: 100px;
  
  `;
export const StarInput = styled.input`
  height: 45px;
  border-radius: 16px;
  width: 200px;
  background: none;
`
export const SubmitBtn = styled.input`
  border-radius: 40px;
  height: 42px;
  width: 150px;
  
  margin-left: 20px;
  margin-top: 50px;
  font-size: 1.8em;
  cursor: pointer;
  background-color: #111;
  color: #fff;
`;

export const DeleteBtn = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  cursor:pointer;
`;

export const EditButton = styled.div`
  position: relative;
  cursor: pointer;
`
export const EditReviewFormWrapper = styled.div`
  margin-left: 3em;
  display: flex;
  justify-content: center;
`