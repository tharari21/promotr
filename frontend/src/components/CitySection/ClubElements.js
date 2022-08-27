import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const ClubWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-auto-rows: 2fr;
    grid-gap: 32px;

    @media screen and (max-width: 1420px) {
        grid-template-columns: 2fr 2fr;
        
    }
    @media screen and (max-width: 940px) {
        grid-template-columns: 1fr ;
        
    }
`

export const ClubItem = styled(Link)`
  text-decoration: none;
  color: #111;
  box-shadow: inset 0 0 5px 5px lightblue;

  background-color: white;
  border: 2px solid white;
  border-radius: 16px;
  height: 400px;
  width: 400px;
`;
export const ClubContent = styled.div`
    display: flex;
    flex-direction: column;

`
export const ClubMainImageWrapper = styled.div`
`

export const ClubTitle = styled.h2`
    padding: 1em;
    font-size: 2em;
    
    `
export const ClubDescription = styled.p`
    padding: 1em;

`