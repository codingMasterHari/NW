class Ground {
    constructor(x, y, width, height) {
        var ground_options = {
            isStatic: true,
            restitution: 0.5
        }
        this.ground = Bodies.rectangle(x, y, width, height, ground_options);
        World.add(world, this.ground);
        this.width = width;
        this.height = height;
    }
    display() {
        var pos = this.ground.position;
        var posX = pos.x;
        var posY = pos.y;
        push();
        translate(posX, posY);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}