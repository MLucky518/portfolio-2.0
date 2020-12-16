import _ from "lodash";
import React, { Component } from "react";
import { Divider, Tab } from "semantic-ui-react";
import ReactProjects from "./ReactProjects";

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
];

const panes = [
  {
    menuItem: "React",
    render: () =>  <ReactProjects/>
  },
  {
    menuItem: "Tab 2",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Tab 3",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

class ProjecsTabs extends Component {
  state = { color: colors[7] };

  handleColorChange = (e) => this.setState({ color: e.target.value });

  render() {
    const { color } = this.state;

    return (
      <div >
        <Divider hidden />

        <Tab
          menu={{ color, inverted: true}}
          panes={panes}
        />
      </div>
    );
  }
}

export default ProjecsTabs;
