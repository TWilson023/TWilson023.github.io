window.onload = function()
{
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	var keys = [];
	for(var i = 0; i < 256; i++)
	{
		keys.push(false);
	}

	var astronaut = new Astronaut(new Vector2(32, 32));
	var world = new World(canvas.height);

	function update()
	{
		astronaut.update(world, keys[87], keys[65], keys[68]);
	}

	function draw()
	{
		context.clearRect(0, 0, canvas.width, canvas.height);
		astronaut.draw(context);
		world.draw(context);
	}

	function keydown(e)
	{
		keys[e.keyCode] = true;
	}

	function keyup(e)
	{
		keys[e.keyCode] = false;
	}

	//GAME LOOP ---------------------

	var run = (function() {
		var loops = 0, skipTicks = 1000 / 32,
		maxFrameSkip = 10,
		nextGameTick = (new Date).getTime();
		return function() {
			loops = 0;
			while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
				update();
				nextGameTick += skipTicks;
				loops++;
			}
			draw();
		};
	})();
	_intervalId = setInterval(run, 0);
	document.onkeydown = keydown;
	document.onkeyup = keyup;
};