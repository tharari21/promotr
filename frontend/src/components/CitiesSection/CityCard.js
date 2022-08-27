import {CityCardContainer} from './CityElements';

const CityCard = ({city}) => {
  
  return (
    <CityCardContainer
      image={`${city.image.url}`}
      to={`/city/${city.id}`}
      style={{ position: "relative" }}
    >
      <h1 style={{zIndex:999}}>{city.name}</h1>
      <img
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        src={`http://localhost:3100${city.image.url}`}
      />
    </CityCardContainer>
  );
}

export default CityCard