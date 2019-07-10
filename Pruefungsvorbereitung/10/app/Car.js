class Car {
	constructor(carWidth, carHeight, canvasWidth, canvasHeight, context) {
		this.MAX_SPEED = 10;

		this.carWidth = carWidth;
		this.carHeight = carHeight;

		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		this.context = context;

		this.color = this.createRandomColor();
		this.speed = this.calculateRandomSpeed();

		this.yPos = this.createRandomLane();
		this.xPos = 0;
	}

	draw() {
		this.context.strokeStyle = this.color;
		this.context.fillStyle = this.color;
		this.context.fillRect(this.xPos, this.yPos, this.carWidth, this.carHeight);
	};

	update() {
		if (this.xPos > this.canvasWidth)
			this.xPos = 0;
		else
			this.xPos += this.speed;
	}

	/* add additional methods if needed */

	createRandomColor() {
		var r =  Math.floor(Math.random() * 255 + 1);
		var g =  Math.floor(Math.random() * 255 + 1);
		var b =  Math.floor(Math.random() * 255 + 1);
		var a =  Math.random();

		return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	}

	calculateRandomSpeed() {
		return Math.floor(Math.random() * (this.MAX_SPEED - 2) + 2);
	}

	createRandomLane() {
		var lanes = this.canvasHeight / this.carHeight;

		return Math.floor(Math.random() * lanes) * this.carHeight;
	}
}
