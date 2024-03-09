import _ from 'lodash';
import printMe from './print.js';
import './styles/style.css';
import picture from './images/flower.jpg';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  const flower = new Image();
  flower.src = picture;
  flower.classList.add("flower");


  element.appendChild(flower);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


if (module.hot) {

  module.hot.accept('./print.js', function () {

    console.log('Accepting the updated printMe module!');

    printMe();

  })

}
