/* BUBBLES

var speed = 300;
var diameter = 350;
var x = 200;
var y = 200;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-show');
  background(0);
  noStroke()
}

function draw() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  x = constrain(x, 0, windowWidth);
  y = constrain(y, 0, windowHeight);
  fill(255);
  ellipse(x, y, diameter, diameter);
}
*/

let col = {
  r: 255,
  g: 255,
  b: 0
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-show');
}

function draw() {
  background(col.r,col.g,col.b);
  col.b = map(mouseX, 0, width, 255, 0);

  fill(0);
  ellipse(mouseX,mouseY, 5, 5)
}
