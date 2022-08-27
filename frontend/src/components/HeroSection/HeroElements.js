import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
export const HeroContainer = styled.div`
    
  background: #617073;
  display: flex;
  padding: 0 30px;
  height: 95vh;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
        rgba(0,0,0,0.2) 0%, 
        rgba(0,0,0,0.6) 100%
    ), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`

  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  margin-top: 5%;
  margin-left: 5%;
  width: 50%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;
export const HeroH1 = styled.h1`
  color: #f1dede;

  font-size: 5em;
  /* text-align: center; */

  @media screen and (max-width: 862px) {
    font-size: 2.1em;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2em;
  }
`;
export const HeroP = styled.p`
  margin-top: 1.5em;
  color: #7a93ac;
  font-size: 2em;
  max-width: 600px;
  @media screen and (max-width: 862px) {
    font-size: 1.8em;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2em;
  }
`;
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    
    
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
