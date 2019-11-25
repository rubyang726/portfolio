let bottom = 350;
let side = 50;
framerate=3


function setup() {
  createCanvas(400, 400);
  background (220,200,190);
  
  strokeWeight(10);
  stroke(50,50,50);
  
  
  
  for(let x =1; x<7; x++){
    
  let xVal = x*50;
    console.log(xVal, bottom);  
   point (xVal+50, bottom);
}
  
  
  for (let y =1; y<7; y++){
    
    let yVal= y*50;
    console.log(side, yVal);
  point(side,yVal);
  
  }
  

}

function draw(){
   for(let i=2; i<8; i++){
   
   let iVal=i*50;
   console.log(side,iVal);
   
   //line(x1,y1,x2,y2);
     strokeWeight(3)
  stroke(random(255), random(255), random(255));
   line(side,iVal-50,iVal,350);
 }
}