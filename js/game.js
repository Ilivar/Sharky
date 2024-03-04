let canvas;
let world;
let keyboard = new Keyboard();
let intervallIds = [];
let i = 1;

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  console.log("My Character is", world.character);
  world.draw();
}

function setStopableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervallIds.push(id);
}

function stopGame() { 
  setTimeout(() => {
  intervallIds.forEach(clearInterval);},2000);
}