class Bob{
    constructor(x, y, r) {
        var options = {
            'restitution':1,
            'friction':0.8,
            'density':1
        }
        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
      }
      display(){
        var bobP=this.body.position;
        push()
        translate(bobP.x,bobP.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
      }
}