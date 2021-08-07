import { useState, useContext } from 'react';
import styled from 'styled-components';
import ProjectSelectorBar from './ProjectSelectorBar';
import ProjectShowcase from './ProjectShowcase';
import projectData from '../../data/projectData';
import { AppContext } from '../../context/ContextProvider';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);
  const { projectsRef, themeColor } = useContext(AppContext);

  return (
    <Container $themeColor={themeColor} ref={projectsRef}>
      <ProjectSelectorBar
        selectedProject={selectedProject}
        projectData={projectData}
        setSelectedProject={setSelectedProject}
      />
      <ProjectShowcase selectedProject={selectedProject} />
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  margin-top: 10rem;
  padding: 1rem 0;
  background: ${({ $themeColor }) =>
    $themeColor === 'light' ? 'var(--glassWhite)' : 'var(--glassCharcoal)'};
  box-shadow: 0 2px 8px 0 var(--mainGreen);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  width: 60%;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  justify-content: center;
  align-items: center;
  transition: all 0.3 ease;
`;
