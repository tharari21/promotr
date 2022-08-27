import CityCard from './CityCard';
import { useEffect, useState } from 'react';


const CitiesContainer = () => {
  const [cities, setCities] = useState([])
  useEffect(() => {
    const getCities = async() => {
      const req = await fetch('http://localhost:3100/cities')
      if (req.ok) {
        const res = await req.json()
        setCities(res)
      }

    }
    getCities()

  }, [])
  return (
    <>
        {cities.map(city => <CityCard key={city.id} city={city}/>)}
    </>
  )
}

export default CitiesContainer;