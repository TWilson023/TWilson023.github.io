var Vector2 = function(x, y) 
{
	this.x = x;
	this.y = y;
}

function startRotation(context, x, y, deg)
{
	context.save();
	context.translate(x, y);
	context.rotate(deg);
	context.translate(-x, -y);
}

function stopRotation(context)
{
	context.restore();
}

function toRadians(degrees)
{
	return 0.0174532925 * degrees;
}