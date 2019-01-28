import React from "react";
import PROJECTS from "../data/projects";
import Project from "./Project";

const Projects = () => (
  <div className="container">
    <h2 className="my-5">Highlighted Projects</h2>
    <div className="row projects">
      {PROJECTS.map(PROJECT => {
        return <Project key={PROJECT.id} project={PROJECT} />;
      })}
    </div>
  </div>
);

export default Projects;
