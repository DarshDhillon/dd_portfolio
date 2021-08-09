import { useState, useContext } from 'react';
import styled from 'styled-components';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { RiMenuFoldLine } from 'react-icons/ri';
import dDlogo from '../../assets/images/dd_logo1.png';
import { AppContext } from '../../context/ContextProvider';
import ThemeToggleSwitch from '../ThemeToggleSwitch/ThemeToggleSwitch';

const CV_GOOGLE_DOCS_LINK =
  'https://drive.google.com/file/d/14HN7mpJpaBjJchG2IQoInrv5bI0QKVsv/view?usp=sharing';

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { aboutRef, projectsRef, contactRef, handleScrollToElement } =
    useContext(AppContext);

  const handleMenuClick = (ref) => {
    setShowMenu((prev) => !prev);
    handleScrollToElement(ref);
  };

  return (
    <MenuHeader>
      <MenuIconWrapper onClick={() => setShowMenu((prev) => !prev)}>
        {showMenu ? <MenuFoldIcon /> : <MenuUnfoldIcon />}
      </MenuIconWrapper>
      <MenuContainer $showMenu={showMenu}>
        <MenuLinkList>
          <MenuLinkItem onClick={() => handleMenuClick(aboutRef)}>
            About
          </MenuLinkItem>
          <MenuLinkItem onClick={() => handleMenuClick(projectsRef)}>
            Projects
          </MenuLinkItem>
          <MenuLinkItem>
            <Anchor
              onClick={() => setShowMenu((prev) => !prev)}
              target='_blank'
              rel='noreferrer'
              href={CV_GOOGLE_DOCS_LINK}
            >
              CV
            </Anchor>
          </MenuLinkItem>
          <MenuLinkItem onClick={() => handleMenuClick(contactRef)}>
            Contact
          </MenuLinkItem>
        </MenuLinkList>
        <Logo src={dDlogo} />
      </MenuContainer>
    </MenuHeader>
  );
};

export default MobileMenu;

const MenuHeader = styled.div`
  padding: 2rem;
  width: 100%;
`;

const MenuIconWrapper = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 999;
  color: var(--mainGreen);
  cursor: pointer;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MenuUnfoldIcon = styled(RiMenuUnfoldLine)`
  font-size: 3rem;
  transition: all 0.3s;
`;

const MenuFoldIcon = styled(RiMenuFoldLine)`
  font-size: 3rem;
  transition: all 0.3s;
`;

const MenuContainer = styled.div`
  z-index: 998;
  position: fixed;
  left: ${({ $showMenu }) => ($showMenu ? '0' : '-100%')};
  top: 0;
  bottom: 0;
  /* height: 100vh; */
  width: 100%;
  background-color: var(--mainCharcoal);
  transition: left 0.3s ease-in-out;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MenuLinkList = styled.ul`
  /* border: 1px solid red; */
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  /* justify-content: center; */
  align-items: center;
`;

const MenuLinkItem = styled.li`
  color: #fff;
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
  transition: all 0.3s;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 60px;
  /* margin-top: 6rem; */
  position: fixed;
  bottom: 1rem;
`;

const ToggleSwitchWrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 999;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
