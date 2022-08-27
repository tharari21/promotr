
import HeroSection from '../components/HeroSection';
import Section from "../components/Section";
import CitiesSection from "../components/CitiesSection";

import {aboutSection, discoverSection} from '../components/Section/Data'
const Home = () => {
  
  return (
    <>
      
      <HeroSection />
      <Section {...aboutSection} />
      <CitiesSection />
    </>
  );
}

export default Home