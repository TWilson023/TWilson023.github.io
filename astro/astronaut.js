var Astronaut = function(pos)
{
	this.pos = pos;
	this.bodyPos = new Vector2(pos.x, pos.y);
	this.armPos = new Vector2(pos.x+5, pos.y+10);
	this.legPos = new Vector2(pos.x+4, pos.y+19);
	this.image = new Image();
	this.image.src = "astronaut.png";

	this.legWidth = 8;
	this.armWidth = 4;
	this.width = 12;
	this.height = 32;

	this.rlRot = 0;
	this.llRot = 0;
	this.raRot = 0;
	this.laRot = 0;
	this.cycleTime = 0;
	this.crazy = false;
}

Astronaut.prototype.move = function(x, y)
{
	this.bodyPos.x += x;
	this.armPos.x += x;
	this.legPos.x += x;
	this.bodyPos.y += y;
	this.armPos.y += y;
	this.legPos.y += y;
}

Astronaut.prototype.update = function(world, w, a, d)
{
	this.rlRot = Math.sin(this.cycleTime)/1.75;
	this.llRot = Math.sin(this.cycleTime+3.14159)/1.75;
	this.laRot = Math.sin(this.cycleTime)/2;
	this.raRot = Math.sin(this.cycleTime+3.14159)/2;
	if(this.crazy)
	{
		this.rlRot += toRadians(1.5);
		this.llRot += toRadians(1.5);
		this.raRot += toRadians(1.5);
		this.laRot += toRadians(1.5);
	}
	this.cycleTime += 0.05;

	var onGround = world.onGround(new Vector2(this.bodyPos.x+this.width/2, this.bodyPos.y+this.height));

	if(a)
		this.move(-2, 0);
	else if(d)
		this.move(2, 0);

	var resolved = world.resolve(new Vector2(this.bodyPos.x+this.width/2, this.bodyPos.y+this.height));
	if(!onGround)
		this.move(0, 1);
	this.move(resolved.x, resolved.y);
}

Astronaut.prototype.draw = function(context)
{
	context.save();

	//Left arm
	startRotation(context, this.armPos.x+this.armWidth/2, this.armPos.y, this.laRot);
	context.drawImage(this.image, 15, 0, 4, 13, this.armPos.x, this.armPos.y, this.armWidth, 13);
	stopRotation(context);
	//Left leg
	startRotation(context, this.legPos.x+this.legWidth/3, this.legPos.y, this.llRot);
	context.drawImage(this.image, 20, 0, 8 , 13, this.legPos.x, this.legPos.y, this.legWidth, 13);
	stopRotation(context);
	//Body
	context.drawImage(this.image, 0, 0, 13, 20, this.bodyPos.x, this.bodyPos.y, 13, 20);
	// Right arm
	startRotation(context, this.armPos.x+this.armWidth/2, this.armPos.y, this.raRot);
	context.drawImage(this.image, 15, 0, 4, 13, this.armPos.x, this.armPos.y, this.armWidth, 13);
	stopRotation(context);
	// Right leg
	startRotation(context, this.legPos.x+this.legWidth/3, this.legPos.y, this.rlRot);
	context.drawImage(this.image, 20, 0, 8, 13, this.legPos.x, this.legPos.y, this.legWidth, 13);
	stopRotation(context);

	context.restore();
}