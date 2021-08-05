import styled from 'styled-components';
import tsLogo from '../../assets/images/ts_logo.png';
import nextjsLogo from '../../assets/images/nextjs_logo.png';
import reactNativeLogo from '../../assets/images/react-native_logo.png';

const LearningTechs = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Technologies I'm currently learning:</Heading>
        <LogosWrapper>
          <TechLogo src={tsLogo} alt='ts_logo' />
          <TechLogo src={reactNativeLogo} alt='react_native_logo' />
          <TechLogo src={nextjsLogo} alt='nextjs_logo' />
        </LogosWrapper>
      </Wrapper>
    </Container>
  );
};

export default LearningTechs;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2rem;
`;

const Heading = styled.h2`
  color: teal;
`;

const LogosWrapper = styled.div`
  display: flex;
  padding: 1rem;
`;

const TechLogo = styled.img`
  width: 200px;
  margin: 1rem;
`;
