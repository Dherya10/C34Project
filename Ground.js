class Ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'friction':1.0,
          'density':0.04
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
     
      rectMode(CENTER);
     
      stroke("green");
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }