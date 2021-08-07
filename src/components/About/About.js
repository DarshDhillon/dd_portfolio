import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const About = () => {
  const { aboutRef, themeColor } = useContext(AppContext);

  return (
    <Container ref={aboutRef} $themeColor={themeColor}>
      <Heading>{`hello {`}</Heading>
      <SubTextWrapper>
        <SubText $themeColor={themeColor}>
          I'm DARSH DHILLON, a ReactJS front-end web developer based in London,
          UK. I specialise in MERN stack architecture, responsive front-end
          designs, and meticulous problem-solving.
        </SubText>
      </SubTextWrapper>
      <Heading>{`}`}</Heading>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin-top: 8rem;
  padding: 2rem 5rem;
  background: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--glassWhite)' : 'var(--glassCharcoal)'};
  box-shadow: 0 2px 8px 0 var(--mainGreen);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  width: 60%;
  display: flex;
  flex-direction: column;
  transition: all 0.3 ease;
`;

const Heading = styled.h1`
  font-size: 8rem;
  color: var(--mainGreen);
`;

const SubTextWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 80%;
`;

const SubText = styled.h2`
  font-size: 1.5rem;
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
`;