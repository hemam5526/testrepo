
var bg

function preload()
{
    bg = loadImage("boy2.png");
}

function setup(){
    createCanvas(500,500);

}

function draw(){
    background(bg);
   
    drawSprites();
}
