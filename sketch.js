const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var gamestate = 0;

var titleImage, title;
var buttonNotPressed, buttonPressed, button, buttonBody;
var floor;
var cube;

function preload(){
    titleImage = loadImage("Images/Title.png");
    buttonNotPressed = loadImage("Images/StartNotPressed.jpg");
    buttonPressed = loadImage("Images/StartPressed.jpg");
}

function setup(){
    createCanvas(displayWidth, displayHeight - 145);
    engine = Engine.create();
    world = engine.world;

    button = createSprite(displayWidth/2, 400, 150, 75);
    button.addImage("button", buttonNotPressed);
    button.scale = 0.2;

    title = createSprite(displayWidth/2, 200);
    title.addImage("title", titleImage);

    floor = new Floor(1000, 500, 500, 20);
    cube = new Cube(200, 465, 50, 50);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    drawSprites();
    imageMode(CENTER);

    if(mouseIsOver(button)){
        button.addImage("button", buttonPressed);
    }

    if(mousePressedOver(button)){
        button.destroy();
        title.destroy();
        gamestate = 1;
    }

    if(gamestate === 1){
        floor.display();
        console.log(floor.body);
        cube.display();
    }

    if(keyCode === 39){
        cube.body.velocity.x = cube.body.velocity.x + 5;
    }

    if(keyCode === 32 || keyCode === 38){
        cube.body.position.y = cube.body.position.y - 10;
        cube.body.position.y = cube.body.position.y - 1;
    }
}   

