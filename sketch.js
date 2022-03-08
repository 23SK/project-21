
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ball;
var groundObject,leftSide,rightSide;

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here	
	var ballOptions = {
		isStaic: false,
		restitution: 0.8,
		friction: 0,
		density: 1.2
	}

	ball = Matter.Bodies.circle(200, 750, 30, ballOptions);
	fill("green");
	//ball.visible = true;
	World.add(world,ball);
	console.log("I am here ball")

	groundObject = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(900, 600, 20, 120);
	rightSide = new Ground(1100, 600, 20, 120);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
	Engine.update(engine)
	background(51);

	ellipse(ball.position.x, ball.position.y,30,30)

	groundObject.display();
	leftSide.display();
	rightSide.display();

	Engine.update(engine);
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, { x: 0, y: 0.05 })
		Matter.Body.applyForce(ball, ball.position, { x: 0.01, y: 0 })
	}
}