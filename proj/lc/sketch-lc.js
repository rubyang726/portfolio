numberVertexes=30;
let radius=100;
let angle=0;
let angleVelocity=0;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  
}

function draw() { 
  
  background(255);
  
  translate(width/2,height/2);
  
  beginShape();

  for(let i=0; i<numberVertexes; i++){
  
  let x = sin(angle)*radius;
    let y = cos(angle)*radius;
    
  vertex(x,y);
    angleVelocity+=0.12
  angle+=angleVelocity
 
  }
  endShape();
  
  
  
  
}