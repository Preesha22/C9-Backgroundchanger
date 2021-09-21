
function setup() {
  createCanvas(1000,800);
}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW)){
      background('yellow')
   }
  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  }
  if (keyIsDown(DOWN_ARROW)){
    background('red');
  }
  if (keyIsDown(UP_ARROW)){
    background('green')
  }
}

