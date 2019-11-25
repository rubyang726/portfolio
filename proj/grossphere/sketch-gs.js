let angle=0,angle2=0;
let r=150;
let resolution=40;
let heightColumn=10;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  orbitControl();
  background(255);

  
  for(let j=0;j<resolution;j++){
  for(let i=0; i<resolution; i++){
 let x=r*sin(angle)*cos(angle2);
 let y=r*sin(angle)*sin(angle2);
    let z=r*cos(angle);
  
  
  push()
  translate (x,y, z)
  sphere(10)
  pop()

  angle+=TWO_PI/resolution
}
    angle2+=PI/resolution
  }

}