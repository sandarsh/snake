"use strict";

function snake(slider){
	this.x = 300;
	this.y = 300;
	this.speedScale = 20;
	this.xSpeed = slider/this.speedScale;
	this.ySpeed = 0;
	this.direction = 'right';
	this.arr = [];


	this.update = function(val, isPaused){
		if(isPaused){
			s.xSpeed = 0;
			s.ySpeed = 0;
			this.direction = 'right';
			return;
		}
		if(this.direction === 'right' && this.xSpeed !== val/this.speedScale){
			this.xSpeed = val/this.speedScale;
		}
		if(this.direction === 'left' && this.xSpeed !== -1 * val/this.speedScale){
			this.xSpeed = -1 * val/this.speedScale;

		}
		if(this.direction === 'up' && this.ySpeed !== -1 * val/this.speedScale){
			this.ySpeed = -1 * val/this.speedScale;
		}
		if(this.direction === 'down' && this.xSpeed !== val/this.speedScale){
			this.ySpeed = val/this.speedScale;

		}

		this.x += this.xSpeed;
		this.y += this.ySpeed;
	};

	this.draw = function(){
		fill(255);
		rect(this.x, this.y,10,10);
	};

	this.foodEaten = function(foodx, foody){
		if(Math.abs(this.x - foodx) <= 5 && Math.abs(this.y - foody) <= 5){

			return true;
		}
	};

	this.checkCollision = function(){
		if (this.x < 0 || this.x > 590 || this.y < 0 || this.y > 590){
			console.log('game over');
			this.x = 300;
			this.y = 300;
			this.ySpeed = 0;
			this.xSpeed = 0;
			this.arr = [];
			return true;
		}
	}
}

function snakeTail(x,y){
	this.x = x;
	this.y = y;
}

