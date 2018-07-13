import React from 'react';
import ReactDOM from 'react-dom';

class SkillsCell extends React.Component {

  render() {
    return (
      <div className="column">
        <figure className="image"><div className="skills-icon center" style={{backgroundImage: 'url(img/' + this.props.skill.icon + ')'}}></div></figure>
        <h3 className="title is-size-4 is-spaced">{this.props.skill.title}</h3>
        <p className="has-text-primary has-text-weight-normal">Languages I've worked with:</p>
        <p>{this.props.skill.langs}</p>
        <p className="has-text-primary has-text-weight-normal">Tools:</p>
        <ul className="skills-list no-bullets">
          {this.props.skill.tools.map((el, ind) => <li key={'tool ' + (ind+1)}>{el}</li>)}
        </ul>
      </div>
    );
  }
}

export default SkillsCell;