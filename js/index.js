class Pac{
  constructor(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
    this.state = 'closed';
  }

  
}

const step = 85;
const pac1 = document.querySelector('.pac');
let x = 0;
let y = 0;
// let leftPressed = false;
// let rightPressed = false;
const faceRight = '400%';
const faceLeft = '300%';
const faceDown = '200%';
const faceUp = '100%';

const fieldWidth = 1020;
const fieldHeight = 510;



// KEYBOARD CONTROLL
let keyDownHander = (e) => {
  if(e.key == "Right" || e.key == "ArrowRight") {
    if (x + step < fieldWidth){
      x += step; // moves pacman
    }
    pac1.style.backgroundPositionY = faceRight; // changes direction he's facing
  }

  if(e.key == "Left" || e.key == "ArrowLeft") {
    if (x - step >= 0){
      x -= step;
    }
    pac1.style.backgroundPositionY = faceLeft;
  }

  if (e.key == "Down" || e.key == "ArrowDown") {
    if (y + step < fieldHeight){
      y += step;
    } 
    pac1.style.backgroundPositionY = faceDown;
  }
  if (e.key == "Up" || e.key == "ArrowUp") {
    if ((y-step) >= 0) {
      y -= step;
    } 
    pac1.style.backgroundPositionY = faceUp;
  }
}


//MOVEMENT
let mouthMovement = () => {
  if (pac1.className == 'pac boy-active-light') {
    pac1.className = 'pac boy-active-light closed';
  } else {
    pac1.className = 'pac boy-active-light';
  }
}

let pacPost = () => {
  pac1.style.left = x + 'px';
  pac1.style.top = y + 'px';
}



document.addEventListener('keydown', keyDownHander, false);

document.addEventListener('DOMContentLoaded', () => {  
  setInterval(mouthMovement, 300);
  setInterval(pacPost, 50);
});