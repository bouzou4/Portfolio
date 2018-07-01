import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/common/NavBar.js";
import Hero from "./components/common/NavBar.js";
import './js/main.js';
import 'normalize.css';
import bulma from 'bulma/bulma.sass';
import './styles/helper.less';
import './styles/styles.less';
import img from './img/adam.jpg';

ReactDOM.render(<NavBar />, document.getElementById('nav'));
ReactDOM.render(<Hero />, document.getElementById('hero'));