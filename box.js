class Box {
    constructor(x, y, width, height) {
        var box_options = {
            restitution: 0.8,
            friction: 1,
            density: 0.04
        }
        this.box = Bodies.rectangle(x, y, width, height, box_options);
        World.add(world, this.box);
        this.width = width;
        this.height = height;
    }
    display() {
        var pos = this.box.position;
        var posX = pos.x;
        var posY = pos.y;
        push();
        translate(posX, posY);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("white");
        fill(random(0, 255), random(0, 255), random(0, 255));
        rect(0, 0, this.width, this.height);
        pop();
    }
}