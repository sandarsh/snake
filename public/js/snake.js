"use strict";

function snake(){
	this.x = 300;
	this.y = 300;
	this.xSpeed = 10;
	this.ySpeed = 0;
	this.direction = 'right';
	this.arr = [];


	this.update = function(isPaused){
		if(isPaused){
			this.xSpeed = 0;
			this.ySpeed = 0;
		} else {
			if(this.direction === 'right') {
				this.xSpeed = 10;
				this.ySpeed = 0;
			}
			if(this.direction === 'left') {
				this.xSpeed = -10;
				this.ySpeed = 0;
			}
			if(this.direction === 'up') {
				this.xSpeed = 0;
				this.ySpeed = -10;
			}
			if(this.direction === 'down') {
				this.xSpeed = 0;
				this.ySpeed = 10;
			}
			let tempx, tempy, headx, heady;
			headx = this.x;
			heady = this.y;
			for(let i=0; i < this.arr.length; i++){
				tempx = this.arr[i].x;
				tempy = this.arr[i].y;
				this.arr[i].x = headx;
				this.arr[i].y =  heady;
				headx = tempx;
				heady = tempy;
			}
			this.x += this.xSpeed;
			this.y += this.ySpeed;
		}
	};

	this.draw = function(){
		fill(255);
		rect(this.x, this.y,10,10);
		for (let i in this.arr){
			fill(255);
			rect(this.arr[i].x, this.arr[i].y, 10, 10);
		}
	};

	this.foodEaten = function(foodx, foody){
		if(Math.abs(this.x - foodx) <= 5 && Math.abs(this.y - foody) <= 5){
			let temp = new snakeTail(this.x, this.y);
			this.arr.unshift(temp);
			return true;
		}
	};

	this.selfCollision = function(){
		for(let i in this.arr){
			if(this.arr[i].x === this.x && this.arr[i].y === this.y){
				return true;
			}
		}
		return false;
	};

	this.checkCollision = function(){
		if (this.x < 0 || this.x > 590 || this.y < 0 || this.y > 590 || this.selfCollision()){
			console.log('game over');
			this.x = 300;
			this.y = 300;
			this.ySpeed = 0;
			this.xSpeed = 10;
			this.arr = [];
			return true;
		}
		return false;

	}
}

function snakeTail(x,y){
	this.x = x;
	this.y = y;
}

