import React from "react";

function Skills() {
  return (
    <div className="skill-container">
      <h1>MY SKILLS</h1>

      <div className="ui items">
        <div className="item react">
          <div className="ui tiny image">
            <i className="fab fa-react"></i>
          </div>
          <div className="content">
            <h3 className="header">React.js</h3>
            <div className="meta">Front end javascript library</div>
            <div className="description">ydbdh</div>
          </div>
        </div>
        
        <div className="item">
          <div className="ui tiny image">
            <i className="fab fa-html5"></i>
          </div>
          <div className="content">
            <h3 className="header">HTML</h3>
            <div className="meta">Markup language</div>
            <div className="description">dhydsi</div>
          </div>
        </div>
        <div className="item">
          <div className="ui tiny image">
            <i className="fab fa-js-square"></i>
          </div>
          <div className="content">
            <h3 className="header">Javascript</h3>
            <div className="meta">Programming language</div>
            <div className="description">dhydsi</div>
          </div>
        </div>
        <div className="item">
          <div className="ui tiny image">
            <i className="fab fa-css3"></i>
          </div>
          <div className="content">
            <h3 className="header">CSS</h3>
            <div className="meta">Cascading Style Sheets</div>
            <div className="description">dhydsi</div>
          </div>
        </div>
        <div className="item">
          <div className="ui tiny image">
            <i className="fab fa-python"></i>
          </div>
          <div className="content">
            <h3 className="header">Python</h3>
            <div className="meta">Programming Language</div>
            <div className="description">dhydsi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
