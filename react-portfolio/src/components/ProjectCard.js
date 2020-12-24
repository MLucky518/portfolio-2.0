import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

function ProjectCard(props) {
    console.log(props)
  return (
    <Card className="project">
      <Image style={{borderBottom:"2px solid purple"}} src={props.project.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header><h1>{props.project.projectName}</h1></Card.Header>
        <Card.Meta>
          <span className="date"></span>
        </Card.Meta>
        <Card.Description>
          
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          
        </a>
      </Card.Content>
    </Card>
  );
}

export default ProjectCard;
