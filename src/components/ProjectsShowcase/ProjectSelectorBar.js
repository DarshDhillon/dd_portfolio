import styled from 'styled-components';
import hhLogo from '../../assets/images/hh_main_notext.png';
import shnLogo from '../../assets/images/shn_white.png';
import ffLogo from '../../assets/images/filmFinder.jpg';
import weatherChartLogo from '../../assets/images/chartjs.png';

const ProjectSelectorBar = ({
  setSelectedProject,
  projectData,
  selectedProject,
}) => {
  return (
    <ProjectSelectorContainer>
      <ProjectSelectorWrapper>
        <ProjectTitleAndLogoWrapper
          onClick={() => setSelectedProject(projectData[0])}
        >
          <ProjectLogo src={hhLogo} alt='hh_logo' />
          <ProjectTitle $projID={1} $projectID={selectedProject.id}>
            happyhealth
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
        <ProjectTitleAndLogoWrapper
          $name={2}
          $projectID={selectedProject.id}
          onClick={() => setSelectedProject(projectData[1])}
        >
          <ProjectLogo src={shnLogo} alt='vac_logo' />
          <ProjectTitle $projID={2} $projectID={selectedProject.id}>
            Vaccine Booker
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
        <ProjectTitleAndLogoWrapper
          $name={3}
          $projectID={selectedProject.id}
          onClick={() => setSelectedProject(projectData[2])}
        >
          <ProjectLogo src={ffLogo} alt='ff_logo' />
          <ProjectTitle $projID={3} $projectID={selectedProject.id}>
            Film Finder
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
        <ProjectTitleAndLogoWrapper
          $name={4}
          $projectID={selectedProject.id}
          onClick={() => setSelectedProject(projectData[3])}
        >
          <ProjectLogo src={weatherChartLogo} alt='chart_logo' />
          <ProjectTitle $projID={4} $projectID={selectedProject.id}>
            24hr Charts
          </ProjectTitle>
        </ProjectTitleAndLogoWrapper>
      </ProjectSelectorWrapper>
    </ProjectSelectorContainer>
  );
};

export default ProjectSelectorBar;

const ProjectSelectorContainer = styled.div`
  background-color: pink;
  width: 50%;
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
  margin-left: 1rem;
  border-bottom: ${({ $projID, $projectID }) =>
    $projID === $projectID ? '4px solid blue' : '4px solid transparent'};

  transition: all 0.3s ease-in-out;
`;
