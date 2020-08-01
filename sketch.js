var mObj,fObj;
function setup() {
  createCanvas(800,400);
  fObj=createSprite(200, 200, 50, 80);
  fObj.shapeColor="green";
  mObj=createSprite(400, 200, 80, 30);
  mObj.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  mObj.x=World.mouseX;
  mObj.y=World.mouseY;
  console.log(mObj.x-fObj.x)
  console.log(fObj.width/2+fObj.width/2);
  if(mObj.x-fObj.x<fObj.width/2+fObj.width/2&&fObj.x-mObj.x<fObj.width/2+fObj.width/2 &&mObj.y-fObj.y<fObj.width/2+fObj.width/2&&fObj.y-mObj.y<fObj.width/2+fObj.width/2)
  {
    fObj.shapeColor="red";
    mObj.shapeColor="red";
  }
  else
  {
    fObj.shapeColor="green";
    mObj.shapeColor="green";
  }

    drawSprites();
}