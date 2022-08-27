import {useEffect, useState} from 'react'
import { CityContainer, CityWrapper, CityTitle } from "./CityElements";
import ClubContainer from './ClubContainer'
const CitySection = ({city}) => {
    const [clubs, setClubs] = useState(null)
    useEffect(() => {
        const getCityClubs = async () => {
            console.log('city',city.name)
            const url = `http://localhost:3100/cities/${city.id}/clubs`;
            console.log(url)
            const req = await fetch(url)
            const res = await req.json()
            console.log(res)
            setClubs(res)
        }
        getCityClubs()
    }, [])
  return (
    <>
      <CityContainer >
        <CityTitle >{city.name}</CityTitle>
        <CityWrapper>
          <ClubContainer clubs={clubs} />
        </CityWrapper>
      </CityContainer>
    </>
  );
}

export default CitySection