class Ball {
    constructor(x, y, r) {
        var ball_options = {
            friction: 1,
            frictionAir: 0.005,
            density: 3
        }
        this.ball = Bodies.circle(x, y, r, ball_options);
        World.add(world, this.ball);
        this.r = r;
    }
    display() {
        var pos = this.ball.position;
        var posX = pos.x;
        var posY = pos.y;
        var angle = this.ball.angle;
        push();
        translate(posX, posY);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4)
        stroke("white");
        fill("yellow");
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}