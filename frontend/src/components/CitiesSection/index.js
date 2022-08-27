import CitiesContainer from './CitiesContainer'
import { CitiesWrapper, Container, CitiesH1 } from './CityElements'

const CitiesSection = () => {
  return (
    <Container id='discover'>
        <CitiesH1>Our Locations</CitiesH1>
        <CitiesWrapper>
            <CitiesContainer  />
        </CitiesWrapper>
    </Container>
  )
}

export default CitiesSection