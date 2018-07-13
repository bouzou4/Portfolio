import React from 'react';
import ReactDOM from 'react-dom';
import SkillsCell from './SkillsCell';

class SkillsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          icon: 'fe-graphic.svg',
          title: 'Front-End Development',
          langs: 'HTML, CSS, Sass/Less, React, jQuery',
          tools: ['Sublime', 'React Dev-Tools', 'Chrome Dev-Tools', 'Sketch', 'Grunt'],
        },
        {
          icon: 'be-graphic.svg',
          title: 'Back-End Development',
          langs: 'NodeJS, MySQL, Postgress, PHP, Laravel',
          tools: ['Docker', 'Apache', 'XAMPP', 'Google PageSpeed'],
        },
        {
          icon: 'graph-graphic.svg',
          title: 'GL Programming',
          langs: 'OpenGL, WebGL, GL Shader Language, C++',
          tools: ['HTML Canvas', 'Unreal Engine 4', 'Unity', 'three.js', 'Mali Debugger', 'Blender'],
        },
      ],
    };
  }

  render() {
    return (
      <div className="columns is-centered">
        {this.state.skills.map((el, ind) => <SkillsCell skill={el} key={'skill ' + (ind+1)} />)}
      </div>
    );
  }
}

export default SkillsTable;