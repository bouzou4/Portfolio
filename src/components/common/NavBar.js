import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar is-white">
        <div className="navbar-brand">
          <div className="navbar-burger burger" data-target="navMenuColorwhite-example">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuColorwhite-example" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#nav">
              Home
            </a>
            <a className="navbar-item" href="#me-description">
              Me
            </a>
            <a className="navbar-item" href="#skills">
              Skills
            </a>
            <a className="navbar-item" href="#projects">
              Projects
            </a>
            <a className="navbar-item" href="#companies">
              Companies
            </a>
            <a className="navbar-item" href="#collab">
              Collab
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;