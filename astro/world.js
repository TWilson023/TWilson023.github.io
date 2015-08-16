var World = function(canvasHeight) 
{
	this.tiles = [];
	this.worldWidth = 64;
	for(var i = 0; i < this.worldWidth; i++)
		this.tiles.push([]);
	this.tileSize = 16;
	var yOff = canvasHeight-this.tileSize*4;
	for(var x = 0; x < this.worldWidth; x++)
	{
		for(var y = 24; y < 32; y++)
			this.tiles[x][y] = 1;
	}
}

World.prototype.resolve = function(pos)
{
	for(var x = 0; x < this.tiles.length; x++)
	{
		for(var y = 0; y < this.tiles[0].length; y++)
		{
			var s = this.tileSize;
			if(this.tiles[x][y] == 1 && pos.x > x*s && pos.y > y*s && pos.x < x*s+s && pos.y < y*s+s)
			{
				return new Vector2(0, y*s-pos.y);
			}
		}
	}
	return new Vector2(0, 0);
}

World.prototype.onGround = function(pos)
{
	for(var x = 0; x < this.tiles.length; x++)
	{
		for(var y = 0; y < this.tiles[0].length; y++)
		{
			var s = this.tileSize;
			if(this.tiles[x][y] == 1 && pos.x >= x*s && pos.y >= y*s && pos.x <= x*s+s && pos.y <= y*s+s)
			{
				return true;
			}
		}
	}
	return false;
}

World.prototype.draw = function(context)
{
	for(var x = 0; x < this.tiles.length; x++) 
	{
		for(var y = 0; y < this.tiles[0].length; y++)
		{
			context.fillStyle = "#EEEEEE";
			if(this.tiles[x][y] == 1)
				context.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
		}
	}
}