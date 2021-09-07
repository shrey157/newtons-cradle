class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:180,
            stiffness: 0.08
        }
        this.rope = Matter.Constraint.create(options)
        this.pointB = pointB
        World.add(world, this.rope)
    }
    display() {
      if(this.rope.bodyA){
          var pointA=this.rope.bodyA.position;
          var pointB=this.pointB
          strokeWeight(4)  
          line (pointA.x,   pointA.y ,pointB.x, pointB.y); 
         }
        
 }
    }