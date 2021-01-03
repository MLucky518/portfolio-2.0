import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function ProjectCard(props) {
  console.log(props);
  return (
    <Card className="project">
      <Image
        style={{ borderBottom: "2px solid purple" }}
        src={props.project.img}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>
          <h1>{props.project.projectName}</h1>
        </Card.Header>
        <Card.Meta>
          <span className="date">{props.project.techUsed}</span>
        </Card.Meta>
        <Card.Description>{props.project.textContent}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>
          Github - <a href={props.project.github}>{props.project.github}</a>{" "}
        </p>
        <br/>
        <p>Deployed Site - <a href = {props.project.liveSite}>{props.project.liveSite}</a></p>
      </Card.Content>
    </Card>
  );
}

export default ProjectCard;
