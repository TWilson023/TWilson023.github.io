var Player = function() {

	var radius = 15;
	var r = 150;
	var angle = 0;

	this.update = function() {
		angle++;
		angle %= 360;
	};

	this.draw = function(ctx) {
		var x = Math.cos(angle * (Math.PI / 180)) * r;
		var y = Math.sin(angle * (Math.PI / 180)) * r;

		ctx.fillStyle = "#FFF";
		ctx.strokeStyle = "#FFF";

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(x, y);
		ctx.stroke();
		ctx.closePath();
	};

};