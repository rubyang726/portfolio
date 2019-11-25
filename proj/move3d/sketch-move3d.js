let angle=0;
let r=50;
let resolution=20;
let xAngle=0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  orbitControl();
  background(220);
  
rotateX(xAngle);
  rotateY(xAngle*2);
  rotateZ(xAngle*10);
  scale(xAngle/2);

  for(let i=0; i<resolution; i++){
  let x=r*cos(angle);
  let y=r*sin(angle);
  
  
  push()
  translate (x,y)
    fill(255,0,255,100);
    stroke(255)
    strokeWeight(1)
  sphere(10)
  pop()

  angle+=TWO_PI/resolution
}
  xAngle+=0.01
}