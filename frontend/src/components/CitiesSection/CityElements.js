import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #171A21;
  
`;

export const CitiesWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-auto-rows: 300px ;
    /* align-items: center; */
    grid-gap: 21px;
    /* padding: 0 20px; */
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 200px 200px 200px;
        
    }
`
export const CitiesH1 = styled.h1`
  text-align: center;
  margin-bottom: 2em;
  font-size: 3em;
  color: #F3D9B1;
`;

export const CityCardContainer = styled(Link)`
  border: 2px solid beige;
  color: #111;
  text-decoration: none;
  background-image: url(${props => props.image});
  background: #92BCEA;
  cursor: pointer;
  transition: transform 0.4s;
  padding: 1em;

  &:hover {
    transform: scale(1.1)
  }
`;