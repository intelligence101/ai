
function setup() {
  createCanvas(700,700);
  background(255);
}


function draw() {

  var xloc = randomGaussian();
  var sd = 60;
  var mean = width/2;
  xloc = (xloc*sd) + mean ;
  fill(0,10);
  noStroke();
  ellipse(xloc, height/2,16,16);

}
