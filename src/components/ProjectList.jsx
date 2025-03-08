import React, { useEffect, useState } from 'react';
import { githubAPI } from '../services/api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    githubAPI.get('/users/guilhermehenrysilva/repos')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar repositórios:', error);
      });
  }, []);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card" onClick={() => window.open(project.html_url, '_blank')}>
          <h3>{project.name}</h3>
          <p>{project.description || 'Sem descrição'}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;