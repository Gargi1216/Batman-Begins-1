class Umbrella {
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("batman.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, r, r);
        this.visiblity = 0;
        pop();
    }
  }