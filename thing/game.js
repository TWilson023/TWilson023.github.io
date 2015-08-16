window.onload = function() {

	var canvas = document.getElementById('gameCanvas');
	var ctx;

	function init() {
		ctx = canvas.getContext('2d');
		window.setInterval(function() {
			update();
			render();
		}, 1000 / 30);
	}

	function update() {

	}

	function render() {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	init();
};