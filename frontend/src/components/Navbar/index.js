import {useLocation} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({ toggleSidebar }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
    const location = useLocation();

    

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            PROMOTR
          </NavLogo>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {location.pathname === "/" && (
              <>
                <NavItem>
                  <NavLinks
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-78}
                  >
                    Discover
                  </NavLinks>
                </NavItem>
              </>
            )}
          </NavMenu>
        </NavbarContainer>
        <NavBtn>
          <NavBtnLink to="signup">Sign Up</NavBtnLink>
          <NavBtnLink to="login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar