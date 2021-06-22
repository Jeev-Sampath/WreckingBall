class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("ballwrecking.png");
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    imageMode(CENTER);
    //image(this.image, this.body.position.x-100, this.body.position.y-100);
    image(this.image, 0, 0, this.width+10, this.height+10);
    this.image.scale = 1;
    pop();
  }
}
