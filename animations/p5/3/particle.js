function Particle(x,y,hu,firework) {

	this.pos = createVector(x,y);// position on the screen 
	this.firework = firework; // to distinguish between base particle of exploded particles 
	this.lifespan = 255; // // time span for keeping the particles in the array 
	this.hu = hu;
	
	if(this.firework){
		this.vel = createVector(0,random(-12,-8));
	}else{
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(-20,20));
	}
	
	this.acc = createVector(0,0);



	this.applyForce = function(force){
		this.acc.add(force);
	}


	this.update = function(){
		if(!this.firework){
			this.vel.mult(0.85);
			this.lifespan -= 10;
		}
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.done = function() {
		if(this.lifespan < 0){
			return true;
		} else {
			return false;
		}
	}

	this.show = function(){
		colorMode(HSB);
		if(!this.firework){
			stroke(this.hu,255,255,this.lifespan);
			strokeWeight(2);
		} else {
			stroke(this.hu,255,255);
			strokeWeight(4);
		}
		
		point(this.pos.x, this.pos.y);
	}

}