window.onload = function() {

	var canvas = document.getElementById('gameCanvas');
	var ctx;

	var player;

	function init() {
		ctx = canvas.getContext('2d');
		player = new Player();
		window.setInterval(function() {
			update();
			draw();
		}, 1000 / 30);
	}

	function update() {
		player.update();
	}

	function draw() {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.save();
		ctx.translate(canvas.width / 2, canvas.height / 2);
		player.draw(ctx);
		ctx.restore();
	}

	init();
};