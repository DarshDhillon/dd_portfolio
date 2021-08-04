import { useState } from 'react';
import styled from 'styled-components';
import ProjectSelectorBar from './ProjectSelectorBar';
import ProjectShowcase from './ProjectShowcase';
import projectData from '../../data/projectData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  return (
    <Container>
      <ProjectSelectorBar
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
