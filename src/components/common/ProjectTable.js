import React from 'react';
import ReactDOM from 'react-dom';
import ProjectCell from './ProjectCell';

class ProjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          pName: "CO OP Site Redesign",
          picture: "proj-coop.jpg",
          link: "http://www.coopbrand.co/",
        },
        {
          pName: "Edu.Chat iOS App",
          picture: "comp-educhat.png",
          link: "https://itunes.apple.com/us/app/edu-chat/id1257780738?mt=8",
        },
        {
          pName: "Brooklyn Bowl Site Re-Design",
          picture: "proj-bkbowl.jpg",
          link: "http://www.brooklynbowl.com/",
        },
        {
          pName: "Sweet N Low Site Re-Design",
          picture: "proj-sweetnlow.jpg",
          link: "http://www.sweetnlow.com/",
        },
        {
          pName: "Nintendo Chibi-Robo Ziplash Site",
          picture: "proj-chibi.jpg",
          link: "http://www.chibirobo-ziplash.com/",
        },
        {
          pName: "Brooklyn City Tower Site",
          picture: "proj-citytwr.jpg",
          link: "http://www.citytowerbk.com/",
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