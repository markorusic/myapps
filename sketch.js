var s;
var scl = 20;
var canvas;
var food;
var countT;
var count = 1;
var count2 = 154;
var gameState = 0;
var first;
var rekord = 0;
var rekord2 = 0;
function setup() {
  first = 1;
  disableScroll();
  canvas = createCanvas(500, 500);
  canvas.parent("#canvas");
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}


function draw() {
  background(51);
  if(gameState == 0){
    textSize(20);
    fill(255);
    if(count != 1)
        text("The end, your result:" + count2 + "\nRekord:"+ rekord +"\n\nPress anything to start again", width/2 - 120, height/2);
    else
      text("Press anything to start again", width/2 - 120, height/2);
      
    s.update();
    s.show(192,192,192,100);
    fill(255, 0, 100, 50);
    rect(food.x, food.y, scl, scl);
  }
  else {
    if(count == 0)
      count = 1;
    if(s.xspeed == 0 && s.yspeed == 0){
      s.xspeed = 1;
      s.x = 20;
      s.x = 0;
      if(first != 1){
        pickLocation();
      }
    }

    fill(255);
    textSize(20);
    countT = text(count, 5,17);
    if (s.eat(food)) {
      count++;
      countT.text(count);
      pickLocation();
    }
    fill(255);
    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
    first = null;
  }
}


function keyPressed() {
  if(gameState == 1){
    if(s.total == 0){
      if (keyCode === UP_ARROW) {
        s.dir(0, -1);
      } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
      } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
      } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
      }
    }

    else{

      if (keyCode === UP_ARROW && s.currentDir() != "down") {
        s.dir(0, -1);
      } else if (keyCode === DOWN_ARROW && s.currentDir() != "up") {
        s.dir(0, 1);
      } else if (keyCode === RIGHT_ARROW && s.currentDir() != "left") {
        s.dir(1, 0);
      } else if (keyCode === LEFT_ARROW && s.currentDir() != "right") {
        s.dir(-1, 0);
      }

    }
  }
  else {
    gameState = 1;
  }

}
