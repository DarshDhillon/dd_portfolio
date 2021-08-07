import styled from 'styled-components';
import { FaHtml5, FaReact, FaSass, FaNodeJs } from 'react-icons/fa';
import {
  SiCss3,
  SiJavascript,
  SiRedux,
  SiStyledComponents,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';

const TechnologiesBar = () => {
  return (
    <TechLogosContainer>
      <TechLogosWrapper>
        <JSIcon title='Javascript' />
        <StyledCIcon title='Styled Components' />
        <ReactIcon title='ReactJS' />
        <ReduxIcon title='Redux' />
        <HTMLIcon title='HMTL5' />
        <SassIcon title='SASS' />
        <NodeIcon title='Node.js' />
        <GitIcon title='Git' />
        <CSSIcon title='CSS' />
      </TechLogosWrapper>
    </TechLogosContainer>
  );
};

export default TechnologiesBar;

const TechLogosContainer = styled.div`
  margin-top: 5rem;
  padding: 2rem;
  width: 60%;
`;

const TechLogosWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: lightgrey;
  font-size: 2.5rem;
`;

const HTMLIcon = styled(FaHtml5)``;

const CSSIcon = styled(SiCss3)``;

const JSIcon = styled(SiJavascript)``;

const ReactIcon = styled(FaReact)``;

const ReduxIcon = styled(SiRedux)``;

const StyledCIcon = styled(SiStyledComponents)`
  font-size: 3rem;
`;

const SassIcon = styled(FaSass)``;

const NodeIcon = styled(FaNodeJs)``;

const GitIcon = styled(DiGit)``;
