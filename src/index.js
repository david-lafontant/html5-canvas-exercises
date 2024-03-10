import updateCanvas from './scripts/updateCanvas';
import './styles/style.css';

const canvas = document.createElement('canvas');
canvas.id = 'myCanvas';

const parent = document.querySelector('body');
parent.appendChild(canvas);

function init() {
  updateCanvas();
}

// load canvas on launch
window.addEventListener('DOMContentLoaded', init, false);

// resize canvas when the window resizes
window.addEventListener('resize', init);
