import React from "react";

function Skills() {
  return (
    <div className="skills-container ui container">
      <h1>MY SKILLS</h1>

      <div className="skill_items">
        <div className="skill_item react">
          <div>
            <i className="fab fa-react"></i>
          </div>
          <div className="skill_content">
            <h3 className="skill_header">React.js</h3>
            <div>Front end javascript library</div>
            <div>ydbdh</div>
          </div>
        </div>

        <div className="skill_item">
          <div>
            <i className="fab fa-html5"></i>
          </div>
          <div className="skill_content">
            <h3 className="skill_header">HTML</h3>
            <div>Markup language</div>
            <div>dhydsi</div>
          </div>
        </div>
        <div className="skill_item">
          <div>
            <i className="fab fa-js-square"></i>
          </div>
          <div className="skill_content">
            <h3 className="skill_header">Javascript</h3>
            <div>Programming language</div>
            <div>dhydsi</div>
          </div>
        </div>
        <div className="skill_item">
          <div className=" ">
            <i className="fab fa-css3"></i>
          </div>
          <div className="skill_content">
            <h3 className="skill_header">CSS</h3>
            <div>Cascading Style Sheets</div>
            <div>dhydsi</div>
          </div>
        </div>
        <div className="skill_item">
          <div>
            <i className="fab fa-python"></i>
          </div>
          <div className="skill_content">
            <h3 className="skill_header">Python</h3>
            <div>Programming Language</div>
            <div>dhydsi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
