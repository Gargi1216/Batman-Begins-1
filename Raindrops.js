class Raindrops{
    constructor(x,y,r){
        this.rain = Matter.bodies.circle(x,y,r);
        this.x = x;
        this.y = y;
        this.r = r;
        this.velocityY = random(1,6);
    }

    down(speed){
        this.y+= speed;
    }
    
    display(){
        push();
        stroke("blue");
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(x,y,r);
        pop();
    }
}