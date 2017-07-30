'use strict';
let s;
let isPaused;
let food = function(width, height){
	this.x = random(width);
	this.y = random(height);
	while(true){
		if(this.x > 590 || this.x < 10 || this.y > 590 || this.y < 0){
			this.x = random(width);
			this.y = random(height);
		} else {
			break
		}
	}
	this.draw = function(){
		fill(175);
		rect(this.x, this.y, 10,10);
	}
};

let f;

function setup(){
	frameRate(10);
	createCanvas(600, 600);
	isPaused = true;
	s = new snake();
	f = new food(width, height);
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
	background(53);
	if(s.checkCollision()){
		isPaused = true;
	}
	s.update(isPaused);
	s.draw();
	f.draw();
	if(s.foodEaten(f.x, f.y)) {
		f.x = random(width);
		f.y = random(height);
	}
}
