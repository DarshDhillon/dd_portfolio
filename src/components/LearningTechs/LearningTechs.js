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
        <LogosWrapper>
          <TechLogo src={tsLogo} alt='ts_logo' />
          <TechLogo
            src={themeColor === 'light' ? nextjsLogoBlack : nextjsLogoWhite}
            alt='nextjs_logo'
          />
          <TechLogo src={reactNativeLogo} alt='react_native_logo' />
        </LogosWrapper>
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

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Heading = styled.h3`
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LogosWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const TechLogo = styled.img`
  width: 80px;

  @media screen and (max-width: 768px) {
    width: 60px;
  }
`;
