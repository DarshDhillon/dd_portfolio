import { useState, useContext } from 'react';
import styled from 'styled-components';
import ProjectSelectorBar from './ProjectSelectorBar';
import ProjectShowcase from './ProjectShowcase';
import projectData from '../../data/projectData';
import { AppContext } from '../../context/ContextProvider';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);
  const { projectsRef } = useContext(AppContext);

  return (
    <Container ref={projectsRef}>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  justify-content: center;
  align-items: center;
`;
