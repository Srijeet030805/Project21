var music;
var box,edges;
var surface1,surface2,surface3,surface4;

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    createCanvas(800,600);

    //create 4 different surfaces

    surface1=createSprite(95,590,190,20);
    surface1.shapeColor= "blue";

    surface2=createSprite(300,590,190,20);
    surface2.shapeColor= "orange";

    surface3=createSprite(500,590,190,20);
    surface3.shapeColor= "red";

    surface4=createSprite(705,590,190,20);
    surface4.shapeColor= "green";

    //create box sprite and give velocity

    box= createSprite(random(20,750),400,50,50);
    box.velocityX=5;
    box.velocityY=5;
    box.shapeColor="white";

}

function draw() 
{
    background(rgb(169,169,169));

    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&&box.bounceOff(surface1))
    {
    	box.shapeColor="blue";
    	music.play();
    }
    else if(surface2.isTouching(box)&&box.bounceOff(surface2))
    {
    	box.shapeColor="orange";
    	music.stop();
    	box.velocityX=0;
    	box.velocityY=0;
    }
    else if(surface3.isTouching(box)&&box.bounceOff(surface3))
    {
    	box.shapeColor="red";
    }
    else if(surface4.isTouching(box)&&box.bounceOff(surface4))
    {
    	box.shapeColor="green";
    }
    drawSprites();
}


