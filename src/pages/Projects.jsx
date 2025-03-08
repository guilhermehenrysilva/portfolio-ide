import React, { useEffect, useState } from 'react';
import { githubAPI } from '../services/api';
import ProjectList from '../components/ProjectList';

const Projects = () => {
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
    <div className="projects-page">
      <h1>Meus Projetos</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;