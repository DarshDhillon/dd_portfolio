import { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { GiAerialSignal } from 'react-icons/gi';
import { AppContext } from '../../context/ContextProvider';
import { MdDesktopWindows, MdPhoneIphone } from 'react-icons/md';

const ProjectShowcase = ({ selectedProject }) => {
  const { themeColor } = useContext(AppContext);

  const [showResponsiveVideo, setShowResponsiveVideo] = useState(false);

  return (
    <ProjectContainer $themeColor={themeColor}>
      <ProjectWrapper>
        <ProjectGalleryWrapper>
          <ProjectGallery
            type='video/mp4'
            src={
              showResponsiveVideo
                ? selectedProject.projectGalleryResponsive
                : selectedProject.projectGalleryDesktop
            }
            autoPlay
            muted
            loop
            // controls
          />
          <VideoSelectorWrapper
            onClick={() => setShowResponsiveVideo((prev) => !prev)}
          >
            {showResponsiveVideo ? <ComputerIcon /> : <ResponsiveIcon />}
          </VideoSelectorWrapper>
        </ProjectGalleryWrapper>
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

const ProjectGalleryWrapper = styled.div`
  position: relative;
`;

const ProjectGallery = styled.video`
  height: 300px;
  width: 533px;

  @media screen and (max-width: 1200px) {
    height: 350px;
    width: 622px;
  }

  @media screen and (max-width: 768px) {
    height: 250px;
    width: 444px;
  }

  @media screen and (max-width: 500px) {
    height: 150px;
    width: 267px;
  }
`;

const VideoSelectorWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background-color: var(--mainGreen);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ComputerIcon = styled(MdDesktopWindows)`
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const ResponsiveIcon = styled(MdPhoneIphone)`
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const ProjectInfoWrapper = styled.div`
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
