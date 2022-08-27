import React from 'react'
import {ClubItem, ClubTitle, ClubContent, ClubDescription} from './ClubElements'
const ClubCard = ({club}) => {
  
  return (
    <ClubItem replace to={`/club/${club.id}`}>
      <ClubContent>
        <ClubTitle>{club.name}</ClubTitle>
        <ClubDescription>{club.description}</ClubDescription>
      </ClubContent>
    </ClubItem>
  );
}

export default ClubCard