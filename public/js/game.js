'use strict';
let s;
let isPaused;
let food = function(width, height){
	this.x = Math.round(random(width)/10) * 10;
	this.y = Math.round(random(height)/10) * 10;
	while(true){
		if(this.x > 590 || this.x < 0 || this.y > 590 || this.y < 0){
			this.x = Math.round(random(width)/10) * 10;
			this.y = Math.round(random(height)/10) * 10;
		} else {
			break
		}
	}
	console.log("Food position ", this.x, this.y);
	this.draw = function(){
		fill(175);
		rect(this.x, this.y, 10,10);
	}
};

let f;

function setup(){
	frameRate(10);
	createCanvas(601, 601);
	isPaused = true;
	s = new snake();
	f = new food(590, 590);
}

function keyPressed(){
	if(keyCode === ENTER){
		isPaused = !isPaused;
		return;
	}
	if(s.direction === 'right' || s.direction === 'left'){
		if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW){

		} else {
			if(keyCode === UP_ARROW){
				s.xSpeed = 0;
				s.ySpeed = -10;
				s.direction = 'up';
			}
			if(keyCode === DOWN_ARROW){
				s.xSpeed = 0;
				s.ySpeed = 10;
				s.direction = 'down';
			}
		}
	}
	if(s.direction === 'up' || s.direction === 'down'){
		if(keyCode === UP_ARROW || keyCode === DOWN_ARROW){

		} else {
			if(keyCode === LEFT_ARROW){
				s.xSpeed = -10;
				s.ySpeed = 0;
				s.direction = 'left';
			}
			if(keyCode === RIGHT_ARROW){
				s.xSpeed = 10;
				s.ySpeed = 0;
				s.direction = 'right';
			}
		}
	}
}

function draw(){
	background(30);
	s.update(isPaused);
	if(s.checkCollision()){
		isPaused = true;
		s.direction = 'right';
	}
	s.draw();
	f.draw();
	if(s.foodEaten(f.x, f.y)) {
		f.x = Math.round(random(590)/10) * 10;
		f.y = Math.round(random(590)/10) * 10;
		console.log("Food position ", f.x, f.y);
	}
}
