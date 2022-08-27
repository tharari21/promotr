import styled from 'styled-components'
import {Link as RouteLink} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
export const Nav = styled.nav`
  /* margin-top: -80px; */

  /* background: ${({scrollNav}) => (scrollNav ? "#000" : "transparent")}; */
  background: #171A21;
  color: #617073;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(RouteLink)`
  font-family: "Rubik Iso", cursive;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 48px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

export const MobileIcon = styled.div`
    display: none;

    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -22px; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
`
export const NavLinks = styled(ScrollLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
    padding-bottom: 10px;
  &.active {
    border-bottom: 3px solid #92bcea;
  }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(RouteLink)`
  border-radius: 50px;
  margin: 0 16px;
  white-space: nowrap;
  padding: 10px 22px;
  background: #617073;
  color: #171a21;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
      background: #92bcea;
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`;