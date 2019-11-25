

function draw() {
  createCanvas(400, 400);
  background(300,200,random(150,200))
  
 equilateralTriangle(0);
  equilateralTriangle(100); 
   equilateralTriangle(200);
  equilateralTriangle(300);
  translate(0,100)
  equilateralTriangle(0);
  equilateralTriangle(100); 
   equilateralTriangle(200);
  equilateralTriangle(300);
  translate(0,100)
  equilateralTriangle(0);
  equilateralTriangle(100); 
   equilateralTriangle(200);
  equilateralTriangle(300);
translate(0,100)
  equilateralTriangle(0);
  equilateralTriangle(100); 
   equilateralTriangle(200);
  equilateralTriangle(300);
  
  function equilateralTriangle(x){
  strokeWeight(4);
  stroke(random(50,100),175);
  fill(random(20),random(125,175),200);
beginShape();
  vertex(x,100);
  vertex(x+100,100);
  vertex(x+50,13.4);
  endShape(CLOSE)
  }
}
