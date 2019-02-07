var R;
var G;
var B;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(170);
  rect(150,150,100,100);
  
  if (mouseIsPressed && mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250){
    
  
   background(80,140,40);
  fill(200);
  rect(150,150,100,100);

  //background(R,G,B);
  //R = random(1,255);
  //G = random(1,255);
  //B = random(1,255);
  }
  
  
}
