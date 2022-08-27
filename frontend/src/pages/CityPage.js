import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import CitySection from '../components/CitySection';
const CityPage = () => {
  const {cityId} = useParams()
  const [city, setCity] = useState(null)
  useEffect(() => {
    const getCity = async () => {
      const req = await fetch(`http://localhost:3100/cities/${cityId}`)
      const res = await req.json()
      console.log('res',res)
      setCity(res)
      
    }
    getCity()
  }, [])
  return (
    <>
      {city && <CitySection city={city} />}
    </>
  );
}

export default CityPage