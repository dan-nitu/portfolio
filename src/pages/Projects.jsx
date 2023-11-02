import { useState } from 'react';

import ProjectsInfo from '../components/projects/ProjectsInfo';
import Projects from '../components/projects/Projects';

const ProjectsPage = () => {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = (value) => {
    setShowProjects(value);
  };

  return (
    <div className='projects-page'>
      <ProjectsInfo handleShowProjects={handleShowProjects} />

      {showProjects && <Projects />}
    </div>
  );
};

export default ProjectsPage;
