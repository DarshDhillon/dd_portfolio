import styled from 'styled-components';
import dDLogo from '../../assets/images/dd_logo1.png';
import HeaderLinks from './HeaderLinks';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={dDLogo} alt='brand_logo' />
        <HeaderLinks />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #000000ba;
  z-index: 999;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 5rem;
  width: 100%;
  /* padding: 1rem; */
`;

const HeaderWrapper = styled.div`
  height: inherit;
  display: flex;
`;

const Logo = styled.img`
  height: inherit;
  cursor: pointer;
`;
