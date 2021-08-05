import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { GiAerialSignal } from 'react-icons/gi';

const ProjectShowcase = ({ selectedProject }) => {
  return (
    <ProjectContainer>
      <ProjectWrapper>
        <ProjectGallery
          type='video/mp4'
          src={selectedProject.projectGallery}
          autoPlay
          muted
          loop
        />
        <ProjectInfoWrapper>
          <ProjectDescription>
            {selectedProject.projectDescription}
          </ProjectDescription>
          <ProjectHighlights>
            <ul>
              {selectedProject.projectHighlights.map((highlight) => (
                <li key={highlight.id}>{highlight.highlight}</li>
              ))}
            </ul>
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
  background-color: pink;
  padding: 2rem;
  width: 60%;
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProjectGallery = styled.video`
  height: 300px;
  width: 500px;
`;

const ProjectInfoWrapper = styled.div`
  /* border: 1px solid blue; */
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const ProjectDescription = styled.h2`
  height: 100px;
  text-align: center;
  margin-bottom: 1rem;
`;

const ProjectHighlights = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
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
  background-color: #fff;
  color: #000;
  text-decoration: none;

  :hover {
    background-color: lightgreen;
  }
`;

const AerialLogo = styled(GiAerialSignal)`
  font-size: 2rem;
  margin-right: 1rem;
`;

const GitHubLogo = styled(FaGithub)`
  font-size: 2rem;
  margin-right: 1rem;
`;
