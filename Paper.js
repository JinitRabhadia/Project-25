class Paper {
  constructor(x, y, width, height) {

      var options = {

          restitution: 0.5,
          friction: 1,
          density: 1

      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/paper.png");
      World.add(world, this.body);

  }
  display() {
 
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    rectMode(CENTER);
  
      
        fill("green");
         imageMode(CENTER);
         image(this.image,0,0, this.width, this.height);
         scale(this.scale);
         
         pop();
  }

  update() {

      if (keyWentDown("space")) {
          Matter.Body.applyForce(this.body, this.body.position, { x: 95, y:-95});
      }
  }
}