class Box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.5,
        'friction':1,
        'density':0.5,

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        push();
      var pos =this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      translate(pos.x, pos.y);
      fill("white");
      stroke("green");
      strokeWeight("4");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };