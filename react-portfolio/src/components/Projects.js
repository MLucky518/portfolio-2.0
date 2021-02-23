import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./util";
import "./project.scss";



function Projects() {
  return (
    <div className="projects">
      
      {projectData.map((project) => {
        return (
          
          <ProjectCard project = {project}/>
        );
      })}
    </div>
  );
}

export default Projects;
