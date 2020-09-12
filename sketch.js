const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops, umbrella;
var raindrops = [];

function preload(){
    img1 = loadImage("batman.png");
}

function setup(){
   var canvas = createCanvas(400,800);
   var engine = Engine.create();
   var world = engine.world;

   umbrella = new Umbrella(180, 690, 225);
   

}



function draw(){
    background(0);
    Engine.update(engine);

    umbrella.display();
    drops.display();
    drops.update();

    var maxDrops = 100;

   if(frameCount%2===0){

    for(i=0; i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    }

}

}


