var surface = 50;
var health_player = 100;
var health_enemy = 100;
var lapse = 1;

let whaleImg;

// function preload(){
//     whaleImg = loadImage("test.jpg");
// }

function setup() {
  createCanvas(800, 600);
  background(220);
  whale = new Whale();
  ship = new Ship();

  //image(whaleImg, 0, 0, img.width/3, img.height/3);
}

function draw() {
	background(220);

	stroke(0);
	strokeWeight(1);
	line(0, surface, width, surface);
  noStroke();

  ship.display();
  ship.attack();
	whale.display();


  //health of whale
	fill(50);
	text(health_player, 10, 10, 70, 80);
  text(health_enemy, width-50, 10, 70, 80);

  var d1 = int(dist(ship.torpedoX, ship.torpedoY, mouseX, mouseY));
  if(d1<50){
    health_player-=2;
  }

  print(d1);

  lapse--;

  if(health_player <= 0){
    background(220);
  	text("YOU LOSE", width/2, height/2, 100, 100);
  }

  var d2 = int(dist(ship.x, ship.y, mouseX, mouseY));

  if (d2 <= 15){
  	health_enemy-=2;
  }

  if(health_enemy <= 0){
    background(220);
  	text("YOU WIN", width/2, height/2, 100, 100);
  }
}

function Whale() {
  this.x = mouseX;
  this.y = mouseY;
  this.diameter = 30;
  this.speed = 1;


  this.display = function() {
    this.x = mouseX;
  	this.y = mouseY;
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    //image(whaleImg, this.x, this.y, img.width/3, img.height/3);

  }
}

function Ship(){
	this.x = random(0, width);
  this.y = 30;
  this.diameter = 30;
  this.speed = 1;

  this.torpedoX = this.x;
	this.torpedoY = this.y;

  this.display = function() {
		this.x = mouseX ;
    fill(0);
    rect(this.x - 100, this.y, 200, 20);
  }

  this.attack = function(){
  	ellipse(this.torpedoX, this.torpedoY+20, 20, 20);
    this.torpedoY+=5;
    if(this.torpedoY >= height){
    	this.torpedoY = 30;
      this.torpedoX = mouseX;
    }
  }
}
