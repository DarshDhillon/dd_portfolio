import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import tsLogo from '../../assets/images/ts_logo.png';
import nextjsLogoBlack from '../../assets/images/nextjs_logo.png';
import nextjsLogoWhite from '../../assets/images/nextjs_logo2.png';
import reactNativeLogo from '../../assets/images/react_native_logo3.jpg';

const LearningTechs = () => {
  const { themeColor } = useContext(AppContext);

  return (
    <Container $themeColor={themeColor}>
      <Wrapper>
        <Heading $themeColor={themeColor}>Currently learning...</Heading>
        <TechLogo src={tsLogo} alt='ts_logo' />
        <TechLogo
          src={themeColor === 'light' ? nextjsLogoBlack : nextjsLogoWhite}
          alt='nextjs_logo'
        />
        <TechLogo src={reactNativeLogo} alt='react_native_logo' />
      </Wrapper>
    </Container>
  );
};

export default LearningTechs;

const Container = styled.div`
  margin-top: 8rem;
  width: 60%;
  background: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--glassWhite)' : 'var(--glassCharcoal)'};
  box-shadow: 0 2px 8px 0 var(--mainGreen);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`;

const Heading = styled.h3`
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
`;

const TechLogo = styled.img`
  width: 80px;
  margin: 0.5rem 1rem;
`;
