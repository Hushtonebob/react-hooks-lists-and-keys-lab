import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const newProject = projects.map( (blam) => { return <ProjectItem key={blam.id} name={blam.name} about={blam.about} technologies={blam.technologies} />})

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newProject}</div>
    </div>
  );
}

export default ProjectList;
