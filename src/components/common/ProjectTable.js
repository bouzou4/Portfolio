import React from 'react';
import ReactDOM from 'react-dom';
import ProjectCell from './ProjectCell';

class ProjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          pName: "TEST PROJECT",
          picture: "fe-graphic.svg",
          link: "http://www.google.com/",
        },
        {
          pName: "TEST PROJECT",
          picture: "fe-graphic.svg",
          link: "http://www.google.com/",
        },
        {
          pName: "TEST PROJECT",
          picture: "fe-graphic.svg",
          link: "http://www.google.com/",
        },
        {
          pName: "TEST PROJECT",
          picture: "fe-graphic.svg",
          link: "http://www.google.com/",
        },
        {
          pName: "TEST PROJECT",
          picture: "fe-graphic.svg",
          link: "http://www.google.com/",
        },
        {
          pName: "TEST PROJECT",
          picture: "fe-graphic.svg",
          link: "http://www.google.com/",
        },
      ]
    };
  }

  render() {
    return (
      <div className="columns is-multiline is-mobile">
        {this.state.projects.map((el, ind) => <ProjectCell project={el} key={"proj " + (ind+1)} />)}
      </div>
    );
  }
}

export default ProjectTable;