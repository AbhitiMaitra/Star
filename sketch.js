var box
function setup() {
  createCanvas(700,700);
  box = createSprite (200,200,50,50);
}

function draw() 
{
  background("green");
  console.log ("Abhiti")
  if (keyDown(UP_ARROW)) {
  box.y = box.y - 5;
  }
  if (keyDown(DOWN_ARROW)){
box.y += 5;
  }
    if (keyDown(RIGHT_ARROW)){
    box.x += 5;
      }
      if (keyDown(LEFT_ARROW)){
        box.x -= 5;
          }
drawSprites ();
}




