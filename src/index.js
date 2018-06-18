import 'normalize.css';
import './js/main.js';
import './styles/helper.less';
import './styles/styles.less';

function app() {
    var element = document.createElement('div');

    element.innerHTML = '<p>Yo wassup </p>';

    return element;
  }

document.body.appendChild(app());