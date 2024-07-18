function setup() {
  createCanvas(700, 480);

  //R, G & B values
  background (52, 235, 107);

// take a big brush
strokeWeight(10);
//dip it in color black
stroke("black");
frameRate(10);
}         

function draw() {
  //declare variables
  let posY = mouseX;
  let posX = mouseY;
  // place a dot on the screen 
  point (posX, posY);
}


