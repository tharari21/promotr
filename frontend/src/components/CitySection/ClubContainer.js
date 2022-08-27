import ClubCard from './ClubCard';
import { ClubWrapper } from './ClubElements';

const ClubContainer = ({clubs}) => {
    

  return (
    <>
      <ClubWrapper>
        {clubs && clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
          ))}
      </ClubWrapper>
    </>
  );
}

export default ClubContainer