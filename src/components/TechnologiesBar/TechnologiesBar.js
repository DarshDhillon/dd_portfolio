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
        <HTMLIcon />
        <CSSIcon />
        <JSIcon />
        <ReactIcon />
        <ReduxIcon />
        <StyledCIcon />
        <SassIcon />
        <NodeIcon />
        <GitIcon />
      </TechLogosWrapper>
    </TechLogosContainer>
  );
};

export default TechnologiesBar;

const TechLogosContainer = styled.div``;

const TechLogosWrapper = styled.div`
  display: flex;
  color: #fff;
  font-size: 2rem;
`;

const HTMLIcon = styled(FaHtml5)``;

const CSSIcon = styled(SiCss3)``;

const JSIcon = styled(SiJavascript)``;

const ReactIcon = styled(FaReact)``;

const ReduxIcon = styled(SiRedux)``;

const StyledCIcon = styled(SiStyledComponents)``;

const SassIcon = styled(FaSass)``;

const NodeIcon = styled(FaNodeJs)``;

const GitIcon = styled(DiGit)``;
