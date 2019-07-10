var carSimulator = (function () {
	var context;

	var CANVAS_WIDTH = 600;
	var CANVAS_HEIGHT = 600;

	var CAR_WIDTH = 15;
	var CAR_HEIGHT = 5;

	var CAR_NUM = 100;
	var BG_COLOR = "black";

	var cars = [];

	function init(carCanvas) {
		context = carCanvas.getContext("2d");

		setupCars();
		window.requestAnimationFrame(draw);
	}

	function draw() {
		drawBackground();
		drawCars();
		window.requestAnimationFrame(draw);
	}

	function setupCars() {
		for(var i = 0; i < CAR_NUM; i++) {
			cars.push(new Car(CAR_WIDTH, CAR_HEIGHT, CANVAS_WIDTH,
				CANVAS_HEIGHT, context));
		}
	}

	function drawBackground() {
		context.fillStyle = BG_COLOR;
		context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}

	function drawCars() {
		cars.forEach(function (car) {
			car.draw();
			car.update();
		});
	}

	return {
		init: init
	}

})();
