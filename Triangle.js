class Triangle {
    constructor(x1,y1,x2,y2,x3,y3) {
      var options = {
         isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(255);
     triangle(x1,y1,x2,y2,x3,y3);
      pop();
    }
 };