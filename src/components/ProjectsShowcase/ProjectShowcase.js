import { useContext } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { GiAerialSignal } from 'react-icons/gi';
import { AppContext } from '../../context/ContextProvider';

const ProjectShowcase = ({ selectedProject }) => {
  const { themeColor } = useContext(AppContext);

  return (
    <ProjectContainer $themeColor={themeColor}>
      <ProjectWrapper>
        <ProjectGallery
          type='video/mp4'
          src={selectedProject.projectGallery}
          // autoPlay
          muted
          loop
          controls
        />
        <ProjectInfoWrapper>
          <ProjectDescription $themeColor={themeColor}>
            {selectedProject.projectDescription}
          </ProjectDescription>
          <ProjectHighlights $themeColor={themeColor}>
            <ProjectList>
              {selectedProject.projectHighlights.map((highlight) => (
                <li key={highlight.id}>{highlight.highlight}</li>
              ))}
            </ProjectList>
          </ProjectHighlights>
          <ButtonWrapper>
            <ViewButton
              href={selectedProject.projectLiveURL}
              rel='noreferrer'
              target='_blank'
            >
              <AerialLogo />
              Live
            </ViewButton>
            <ViewButton
              href={selectedProject.projectGithubURL}
              rel='noreferrer'
              target='_blank'
            >
              <GitHubLogo />
              Code
            </ViewButton>
          </ButtonWrapper>
        </ProjectInfoWrapper>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default ProjectShowcase;

const ProjectContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 2rem;
  padding: 2rem 1rem;
  width: 100%;
  transition: all 0.3s ease;
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ProjectGallery = styled.video`
  height: 300px;
  width: 500px;

  @media screen and (max-width: 1200px) {
    height: 390px;
    width: 650px;
  }

  @media screen and (max-width: 768px) {
    height: 250px;
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    height: 150px;
    width: 250px;
  }
`;

const ProjectInfoWrapper = styled.div`
  /* border: 1px solid blue; */
  padding: 1rem 0rem;
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    margin-top: 2rem;
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ProjectDescription = styled.h2`
  /* border: 1px solid red; */
  color: ${({ $themeColor }) => ($themeColor === 'light' ? '#000' : '#fff')};
  height: 100px;
  text-align: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 500px) {
    height: 70px;
    font-size: 0.8rem;
  }
`;

const ProjectHighlights = styled.div`
  padding: 1rem;
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  @media screen and (max-width: 1200px) {
    text-align: center;
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const ProjectList = styled.ul`
  @media screen and (max-width: 1200px) {
    list-style: none;
  }
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  background-color: var(--mainGreen);
  color: #fff;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1.2rem;

    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0.2rem 0.5rem;

    font-size: 0.7rem;
  }
`;

const AerialLogo = styled(GiAerialSignal)`
  font-size: 2rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const GitHubLogo = styled(FaGithub)`
  font-size: 2rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
