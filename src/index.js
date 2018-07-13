import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/common/NavBar.js";
import CompanyTable from "./components/common/CompanyTable.js";
import ProjectTable from "./components/common/ProjectTable.js";
import SkillsTable from "./components/common/SkillsTable.js";
import './js/main.js';
import 'normalize.css';
import bulma from 'bulma/bulma.sass';
import './styles/helper.less';
import './styles/styles.less';

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(<SkillsTable />, document.getElementById('skills-cells'));
ReactDOM.render(<ProjectTable />, document.getElementById('proj-cells'));
ReactDOM.render(<CompanyTable />, document.getElementById('comp-cells'));
// ReactDOM.render(<Hero />, document.getElementById('hero'));