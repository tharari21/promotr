import {useState} from 'react'
import Video from "../../videos/night-at-roxbury.mp4";
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => setHover(hover => !hover)
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop>
          <source src={Video} type="video/mp4" />
        </VideoBg> */}
        <VideoBg autoPlay loop src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Club-Going Has Never Been Easier...</HeroH1>
        <HeroP>
          Say goodbye to promoters and say hello to Promotr! Sign up today to
          see what everyone is 🪩 raving 🪩 about.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get Started! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection