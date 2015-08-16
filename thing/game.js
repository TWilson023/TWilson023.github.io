window.onload = function() {

	var canvas = document.getElementById('gameCanvas');
	var ctx;

	var player;

	function init() {
		ctx = canvas.getContext('2d');
		player = new Player();
		window.setInterval(function() {
			update();
			render();
		}, 1000 / 30);
	}

	function update() {
		player.update();
	}

	function render() {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		player.render(ctx);
	}

	init();
};