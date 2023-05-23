import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-primary rounded p-2 mb-2">
      <h5>{project.name}</h5>

      <span className="font-italic">description: </span>
      <p className="font-weight-bold">{project.description}</p>
    </div>
  );
}
