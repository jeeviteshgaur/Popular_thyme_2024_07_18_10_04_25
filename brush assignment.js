function setup() {
  createCanvas(700, 480);

  //R, G & B values
  background(255, 204, 0);

  // take a big brush
  strokeWeight(10);
  //dip it in color yellow
  stroke("yellow");
  frameRate(25);
}

function draw() {
  //declare variables
  let posY = mouseX;
  let posX = mouseY;
  // place a dot on the screen
  point(posX, posY);
}
