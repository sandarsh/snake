'use strict';

let s;
let slider;
let isPaused;
let food = function(){
	this.x = random(10, 590);
	this.y = random(10, 590);
	this.draw = function(){
		fill(175);
		rect(this.x, this.y, 10,10);
	}
};

let f;

function setup(){
	createCanvas(600, 600);
	slider = createSlider(0, 255, 30);
	isPaused = true;
	s = new snake(slider.value());
	f = new food();
}

function keyPressed(){
	if(keyCode === ENTER){
		isPaused = !isPaused;
		return;
	}
	if(isPaused){
		return;
	}
	if(s.direction === 'right' || s.direction === 'left'){
		if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW){

		} else {
			if(keyCode === UP_ARROW){
				s.xSpeed = 0;
				s.ySpeed = -1 * slider.value();
				s.direction = 'up';
			}
			if(keyCode === DOWN_ARROW){
				s.xSpeed = 0;
				s.ySpeed = slider.value();
				s.direction = 'down';
			}
		}
	}
	if(s.direction === 'up' || s.direction === 'down'){
		if(keyCode === UP_ARROW || keyCode === DOWN_ARROW){

		} else {
			if(keyCode === LEFT_ARROW){
				s.xSpeed = -1 * slider.value();
				s.ySpeed = 0;
				s.direction = 'left';
			}
			if(keyCode === RIGHT_ARROW){
				s.xSpeed = slider.value();
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
	s.update(slider.value(), isPaused);
	s.draw();
	f.draw();
	if(s.foodEaten(f.x, f.y)) {
		f.x = random(10, 590);
		f.y = random(10, 590);
	}
}
