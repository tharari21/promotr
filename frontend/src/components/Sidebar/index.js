import {useLocation} from 'react-router-dom'

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation()

  return (
    <SidebarContainer isOpen={isSidebarOpen} onClick={toggleSidebar}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon onClick={toggleSidebar} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {location.pathname==="/" && (
            <>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="discover">Discover</SidebarLink>
                <SidebarLink to="services">Services</SidebarLink>
            </>
          )}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signup">Sign Up</SidebarRoute>
          <SidebarRoute to="/login">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;