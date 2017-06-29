
var walker;

function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.render = function() {
    stroke(0);
    point(this.x, this.y);
  }

  this.step = function(){

    var xloc = randomGaussian();
    var yloc = randomGaussian();

    this.x += xloc;
    this.y += yloc;

    this.x = constrain(this.x , 0, width-1);
    this.y = constrain(this.y, 0, height-1);

  }
}


function setup() {
  createCanvas(700,700);
  walker = new Walker();
  background(127);
}


function draw() {
  walker.step();
  walker.render();
}
