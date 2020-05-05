import React from "react";

function Skills() {
  return (
    <div className="skill-container">
      <h1>MY SKILLS</h1>
      <div className="skill-flex">
        <div class="ui items">
          <div class="item react">
            <div class="ui tiny image">
              <i class="fab fa-react"></i>
            </div>
            <div class="content">
              <a class="header">React.js</a>
              <div class="meta">Front end javascript library</div>
              <div class="description">ydbdh</div>
            </div>
          </div>
          <div class="item">
            <div class="ui tiny image">
              <i class="fab fa-html5"></i>
            </div>
            <div class="content">
              <a class="header">HTML</a>
              <div class="meta">Markup language</div>
              <div class="description">dhydsi</div>
            </div>
          </div>
          <div class="item">
            <div class="ui tiny image">
              <i className="fab fa-js-square"></i>
            </div>
            <div class="content">
              <a class="header">Javascript</a>
              <div class="meta">Programming language</div>
              <div class="description">dhydsi</div>
            </div>
          </div>
          <div class="item">
            <div class="ui tiny image">
            <i class="fab fa-css3"></i>
            </div>
            <div class="content">
              <a class="header">CSS</a>
              <div class="meta">Cascading Style Sheets</div>
              <div class="description">dhydsi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
