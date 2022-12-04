
/*
<input id="font-size-control" type="range" min="16" max="96" />
  <br />
  <span id="text">Abracadabra!</span> */

const sizeControl = document.querySelector('#font-size-control');
const valueText = document.querySelector('#text');

sizeControl.addEventListener('input', event => {
    valueText.style.fontSize = `${event.target.value}px`
});