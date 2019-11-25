let colors = [];
let numColors = 4;
let numSquares =40;
let squareWidth = 10;


function setup() {
  createCanvas(400, 400);
  noStroke();
  let color1 = [220,90,80];
  let color2 = [87, 151, 181];
    colors= [color1, color2];
          for(let i = 0; i<numSquares; i++){
            
            for(let j=0; j<numSquares; j++){

            let x = i*10; y=j*10;

         
            fill(colors[floor(random(colors.length))]);
          rect(x,y,squareWidth,squareWidth);
           
            }
          }
  

  
  for(let i=0; i<width/numSquares; i++){
  
  
  
  
  }
}

function draw() {
  //background(220);
  
  

}