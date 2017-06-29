var circles = [];


function preload() {

}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	// circles= new Circle(width/2, height/2, 50);
	for(var i=0; i< 100; i++){
		circles.push(new Circle(random(windowWidth), random(windowHeight)));
	}

}

function draw() {
  background(51);
  // frameRate(20)
  // textSize(128);
  // fill(255);
  // noStroke();
  // text('Dublin', 300,300);

  // var points = p5.Font.textToPoints('Dublin', 300,300);
  // console.log(points);


  var total = 10;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 100) {
      noLoop();
      console.log("finished");
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 2 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}



function newCircle() {
	var x = random(width);
	var y = random(height);
	var valid = true; 

	for (var i = 0; i <= circles.length -1; i++) {
		var circle = circles[i];

		var d = dist(x, y, circle.x, circle.y);

		if(d < circle.r) {
			valid = false;
			break;
		}
	}
	if(valid){
		return new Circle(x,y);
	} else {
		return null;
	}
}