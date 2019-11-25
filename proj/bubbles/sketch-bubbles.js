function setup() {
  createCanvas(800, 800);
  background(250, 45, 223,80);
  background(250, 239, 35,60);
  
  
  drawCircle(width/2, height/2, 400);
  
  
  
}

function drawCircle(x,y,r){

fill(252, random(90,186), 3);
  ellipse(x, y, r);
  
r*=0.5;

  
  if (r>2){
  drawCircle(x+r,y*2+r,r);
    drawCircle(x-r,y/r+r,r);
     drawCircle(x,y/r+2*r,r);
     drawCircle(x/4,y/r+2/r,r);
   
    
  }

}