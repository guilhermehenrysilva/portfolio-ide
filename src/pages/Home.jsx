import React, { useState } from 'react';
import { FaFolder, FaHome, FaProjectDiagram } from 'react-icons/fa';
import ProjectList from '../components/ProjectList';
import Terminal from '../components/Terminal';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Função para calcular a idade
  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  };

  const idade = calcularIdade('1996-04-24');
  const nome = "Guilherme Henrique da Silva";
  const cidade = "Itajubá - MG";
  const area = "Backend";
  const aboutMePart1 = "Sou um desenvolvedor backend com experiência em Java, Spring Boot, Docker e microserviços. "
  const aboutMePart2 = "Adoro resolver problemas complexos e aprender novas tecnologias.";
  const experiencia1 = "Desenvolvedor Backend na Empresa Tinnova (2022 - Presente)";
  const experiencia2 = "Desenvolvedor Backend na Empresa B2ML Sistemas (2021 - 2021)";
  const formacao1 = "Graduado em Sistemas de Informação - FEPI - Centro Universitário de Itajubá (2016 - 2019)";
  const tecnologias = ["Java", "Spring Boot", "Docker", "Microserviços", "Mensageria", "SQL"];
  
  const renderContent = () => {
    if (currentPage === 'home') {
      const codeLines = `
    public class Profile {
      public static void main(String[] args) {
        ProfileBuilder profile = Profile.builder
          .name("${nome}")
          .age(${idade})
          .city("${cidade}")
          .area("${area}")
          .aboutMe("${aboutMePart1}" +
          "${aboutMePart2}")
          .experience(new ArrayList<>(Arrays.asList(
            "${experiencia1}",
            "${experiencia2}"
          )))
          .training(new ArrayList<>(Arrays.asList(
            "${formacao1}"
          )))
          .technologies(new ArrayList<>(Arrays.asList(
            ${tecnologias.map(tech => `"${tech}"`).join(", ")}
          )))
          .build();
    
        System.out.println(profile);
      }
    }
      `.split('\n');
  
      return (
        <>
          {/* Profile.java */}
          <div className="file-header">
            <span>Profile.java</span>
          </div>
          <div className="code-container">
            <pre className="code-with-lines">
              <code className="language-java">
                {codeLines.map((line, index) => (
                  <div key={index} className="code-line">
                    <span className="line-number">{index + 1}</span>
                    <span
                      className="line-content"
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/"/g, "'") // Substitui aspas duplas por simples temporariamente
                          .replace(/\b(public|class|static|void|new|ArrayList|Arrays|import|package|return|if|else|for|while|switch|case|break|continue|default|try|catch|finally|throw|throws)\b/g, '<span class="keyword">$&</span>') // Palavras-chave
                          .replace(/'([^']+)'/g, '<span class="string">\'$1\'</span>') // Strings normais (com aspas simples)
                          .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>') // Comentários
                          .replace(/\b(ProfileBuilder|Profile|String|System|out|println)\b/g, '<span class="class-name">$&</span>') // Nomes de classes e métodos
                          .replace(/\.\w+\(/g, '<span class="method">$&</span>') // Métodos
                          .replace(/\b\d+\b/g, '<span class="number">$&</span>') // Números
                          .replace(/'/g, '"') // Restaurar aspas simples para duplas
                      }}
                    />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </>
      );
    } else if (currentPage === 'projects') {
      return <ProjectList />;
    }
  };
  
  return (
    <div className="ide-container">
      {/* Barra lateral */}
      <div className="sidebar">
        <div className="project-structure">
          <h3>
            <FaFolder /> Portfolio
          </h3>
          <ul>
            <li onClick={() => setCurrentPage('home')}>
              <FaHome /> Home
            </li>
            <li onClick={() => setCurrentPage('projects')}>
              <FaProjectDiagram /> Projects
            </li>
          </ul>
        </div>
      </div>

      {/* Área principal */}
      <div className="main-content">{renderContent()}</div>

      {/* Terminal no rodapé */}
      <Terminal />
    </div>
  );
};

export default Home;