import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa';

const Terminal = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`terminal ${isMinimized ? 'minimized' : ''}`}>
      <div className="terminal-header">
        <span>Terminal</span>
        <button onClick={toggleMinimize} className="minimize-button">
          {isMinimized ? <FaWindowMaximize /> : <FaWindowMinimize />}
        </button>
      </div>
      {!isMinimized && (
        <div className="terminal-content">
          <div className="terminal-prefix">
            <span className="user">User@User-PC</span>
            <span className="path"> MINGW64 ~/Documents/projects/Guilherme-Portfolio</span>
          </div>
          <div className="terminal-command">
            <span className="prompt">$</span> contact list
          </div>
          <p>Guilherme Henrique da Silva</p>
          <div className="contact-buttons">
            <a href="mailto:ghs.guilherme.silva@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-button">
              <FaEnvelope className="icon" />
              Email
            </a>
            <a href="https://linkedin.com/in/guilhermehenrysilva" target="_blank" rel="noopener noreferrer" className="contact-button">
              <FaLinkedin className="icon" />
              LinkedIn
            </a>
            <a href="https://github.com/guilhermehenrysilva" target="_blank" rel="noopener noreferrer" className="contact-button">
              <FaGithub className="icon" />
              GitHub
            </a>
            <a href="https://instagram.com/_guilherme.henry" target="_blank" rel="noopener noreferrer" className="contact-button">
              <FaInstagram className="icon" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;