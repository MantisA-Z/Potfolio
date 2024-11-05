import "./Projects.css";
import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import styled from "styled-components";

import React from "react";

const Projects = () => {
  const projectsArr = [
    {
      name: "Tick Tack Toe",
      githubURL: "https://github.com/MantisA-Z/tick_tack_toe-client",
      websiteURL: "https://tick-tack-toe-client.onrender.com",
      imgURL: "/tick_tack_toe_project.png",
    },
    {
      name: "BGMI Rooms",
      githubURL: "https://github.com/MantisA-Z/Bgmi_rooms",
      websiteURL: "https://bgmi-rooms.onrender.com/",
      imgURL: "/BGMI_ROOMS_project.png",
    },
  ];

  return (
    <div className="projects-container" style={{}}>
      <h2>Projects I have built</h2>
      <div className="projects">
        {projectsArr.map((val, i) => (
          <div className="project" key={i}>
            <h2>{val.name}</h2>
            <div className="links">
              <a href={val.githubURL}>
                <GithubIcon />
              </a>
              <a href={val.websiteURL}>
                <LinkIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
