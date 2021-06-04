class Rope {
    constructor(bodyA, pointB) {
        var rope_options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 200
        }
        this.pointB = pointB;
        this.rope = Constraint.create(rope_options);
        World.add(world, this.rope);
        
    }

    // attach(body) {
    //     this.rope.bodyA = body;
    // }

    display() {
        if(this.rope.bodyA) {
            var posA = this.rope.bodyA.position;
            var posB = this.pointB;
            push();
            strokeWeight(4)
            stroke("white");
            line(posA.x, posA.y, posB.x, posB.y);
            pop();
        }
    }
}