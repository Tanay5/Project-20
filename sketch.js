var garden, gardenImage

var cat, catImage1, catImage2, catImage3

var mouse, mouseImage1, mouseImage2, mouseImage3

function preload() {
    //load the images here

    gardenImage = loadImage("images/garden.png");
    catImage1 = loadImage("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catImage3 = loadImage("images/cat4.png");
    mouseImage1 = loadImage("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImage3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(100, 100, 500, 400);
    garden.addImage(gardenImage);
    garden.scale = 2

    mouse = createSprite(200, 600, 50, 50);
    mouse.addImage(mouseImage1);
    mouse.scale = 0.1

    cat = createSprite(600, 600, 50, 50);
    cat.addImage(catImage1);
    cat.scale = 0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.addAnimation("catLastImage", catImage3);
        cat.changeAnimation("catLastImage");
        cat.velocityX = 0
        cat.x = 275

        mouse.addAnimation("mouseLastImage", mouseImage3);
        mouse.changeAnimation("mouseLastImage");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImage2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing", mouseImage2);
        mouse.changeAnimation("mouseTeasing");
    }
}
