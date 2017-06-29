var x = 0;
var y = 0 ;

function setup() {
  createCanvas(500,500);
  console.log('setup function');
}

function draw() {
  background(255,0,0);
  ellipse(200,200,50,50);
  console.log(frameCount);
}
