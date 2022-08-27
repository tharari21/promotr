import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClubSection from '../components/ClubSection'
const ClubPage = () => {
  const {clubId} = useParams()
  const [club, setClub] = useState(null)
  useEffect(() => {
    const getClub = async () => {
      const req = await fetch(`http://localhost:3100/clubs/${clubId}`)
      const res = await req.json()
      setClub(res)
    }
    getClub()
  }, [])
  return (
    <>
        {club && <ClubSection club={club} />}
    </>
  )
}

export default ClubPage