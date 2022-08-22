var character1, character2;
var character1Img,character2Img;
var background, backgroundImg;

function preload(){
    character1Img= loadImage("other.png");
    character2Img= loadImage("other character.webp");
    backgroundImg= loadImage("background.jpg");
}

function setup() {
 
    createCanvas(400,400);
    
    background=createSprite(400,400);
    background.addImage("background",backgroundImg);
    background.velocityY=4;
    background.scale=1.2;

    character1=createSprite(200,200);
    character1.addImage("other",character1Img);
    character1.velocityY=0;
    character1.scale=0.1;

    character2=createSprite(300,300);
    character2.addImage("other character",character2Img);
    character2.velocityY=0;
    character2.scale=0.1;
}

function draw() {
    
    
    
    drawSprites();
}