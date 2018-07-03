import React from 'react';
import ReactDOM from 'react-dom';

class ProjectCell extends React.Component {

  render() {
    return (
      <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
        <figure className="image"><div className="proj-img" style={{backgroundImage: 'url(img/' + this.props.project.picture + ')'}}></div>
          <figcaption>
            <h1 className="title is-size-5 is-size-4-widescreen">{this.props.project.pName}</h1><a className="button is-primary is-outlined is-rounded" href={this.props.project.link} target="_blank"><span>Visit Website &rarr;</span></a>
          </figcaption>
          <div className="overlay"></div>
        </figure>
      </div>
    );
  }
}

export default ProjectCell;