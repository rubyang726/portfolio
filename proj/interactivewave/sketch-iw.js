let r=30;
let angle = 0;
let time =0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(52, 79, 235);
  
  
  for(let j=0;j<height/r;j++){
 for (let i =0; i<width/r; i++){
   
   const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (i / width)*2 + yAngle * (j / height)*8;

  let bigX=i*r;
   let bigY=j*r;
   
   noFill();
   stroke(155);
  ellipse(bigX,bigY,r*2);
  
  let x = bigX+r*cos(TWO_PI*time-angle/2);
  let y= bigY+r*sin(TWO_PI*time+2*angle)*2;
  
   
 
  fill(52, 235, 204)
  ellipse(x,y,r/5);
  
  
  
 }
  }
  
  time+=0.01
}