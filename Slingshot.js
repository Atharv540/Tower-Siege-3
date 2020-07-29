class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            push();
            strokeWeight(5);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y,pointB.x,pointB.y);
            //line(pointA.x-20, pointA.y,pointB.x+30,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,12,25);
            pop();

        }
        image(this.sling1,200,20)
        
    }

    
}