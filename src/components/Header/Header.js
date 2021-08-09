import { useRef, useContext } from 'react';
import styled from 'styled-components';
import dDLogo from '../../assets/images/dd_logo1.png';
import HeaderLinks from './HeaderLinks';
import ThemeToggleSwitch from '../ThemeToggleSwitch/ThemeToggleSwitch';
import { AppContext } from '../../context/ContextProvider';

const Header = () => {
  const { themeColor } = useContext(AppContext);

  const headerRef = useRef(null);

  let prevScrollpos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      headerRef.current.style.top = '0';
    } else {
      headerRef.current.style.top = '-80px';
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <HeaderContainer $themeColor={themeColor} ref={headerRef}>
      <HeaderWrapper>
        <Logo src={dDLogo} alt='brand_logo' />
        <HeaderLinks />
        <ThemeToggleSwitch />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: ${({ $themeColor }) =>
    $themeColor === 'light' ? '#ffffffeb' : '#000000ca'};
  z-index: 999;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 5rem;
  width: 100%;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: inherit;
`;

const Logo = styled.img`
  height: inherit;
`;
