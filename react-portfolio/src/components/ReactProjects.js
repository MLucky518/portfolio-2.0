import React from "react";

function ReactProjects() {
  const projects = [
    {
      name: "proj1",
    },
    {
      name: "proj2",
    },
  ];
  return (
    <div>
      <h1>React Stuff</h1>
      <div className="project-container">
        {projects.map((proj) => {
            console.log(proj)
          return (
            <div>
              <h1>{proj.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReactProjects;
