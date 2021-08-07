import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import hhLogoTransparent from '../../assets/images/hh_no_background.png';
import shnLogoTransparent from '../../assets/images/shn_logo_transparent.png';
import ffLogoTransparent from '../../assets/images/film_finder_logo_transparent.png';
import weatherChartLogoTransparent from '../../assets/images/charts_logo_transparent.png';

const ProjectSelectorBar = ({
  setSelectedProject,
  projectData,
  selectedProject,
}) => {
  const { themeColor } = useContext(AppContext);

  return (
    <ProjectSelectorContainer>
      <ProjectSelectorWrapper>
        <ProjectTitleAndLogoWrapper
          onClick={() => setSelectedProject(projectData[0])}
        >
          <ProjectLogo src={hhLogoTransparent} alt='hh_logo' />
          <ProjectTitle
            $themeColor={themeColor}
            $projID={1}
            $projectID={selectedProject.id}
          >
            happyhealth
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
        <ProjectTitleAndLogoWrapper
          $name={2}
          $projectID={selectedProject.id}
          onClick={() => setSelectedProject(projectData[1])}
        >
          <ProjectLogo src={shnLogoTransparent} alt='vac_logo' />
          <ProjectTitle
            $themeColor={themeColor}
            $projID={2}
            $projectID={selectedProject.id}
          >
            Vaccine Booker
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
        <ProjectTitleAndLogoWrapper
          $name={3}
          $projectID={selectedProject.id}
          onClick={() => setSelectedProject(projectData[2])}
        >
          <ProjectLogo src={ffLogoTransparent} alt='ff_logo' />
          <ProjectTitle
            $themeColor={themeColor}
            $projID={3}
            $projectID={selectedProject.id}
          >
            Film Finder
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
        <ProjectTitleAndLogoWrapper
          $name={4}
          $projectID={selectedProject.id}
          onClick={() => setSelectedProject(projectData[3])}
        >
          <ProjectLogo src={weatherChartLogoTransparent} alt='chart_logo' />
          <ProjectTitle
            $themeColor={themeColor}
            $projID={4}
            $projectID={selectedProject.id}
          >
            24hr Charts
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
      </ProjectSelectorWrapper>
    </ProjectSelectorContainer>
  );
};

export default ProjectSelectorBar;

const ProjectSelectorContainer = styled.div`
  width: 100%;
  padding: 1rem 0rem;
`;

const ProjectSelectorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProjectTitleAndLogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectLogo = styled.img`
  height: 100px;
  width: 100px;
`;

const ProjectTitle = styled.h2`
  color: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--mainCharcoal)' : '#fff'};
  border-bottom: ${({ $projID, $projectID }) =>
    $projID === $projectID
      ? '5px solid var(--mainGreen)'
      : '5px solid transparent'};

  transition: all 0.3s ease;
`;
