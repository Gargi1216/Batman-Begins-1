class Drops{
    constructor(x,y){
        var options={
            restitution : 0.1
        }
    this.body = Matter.Bodies.circle(x,y,10,options);
    this.x = x;
    this.y = y;
    World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill(0,114,255);
        ellipse(x,y,0,10);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x : random(0,400), y : random(0,400)});
        } 
    }
}