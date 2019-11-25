let img;
let counter=0;
let squareSize=8.5;
var numSquares;


var colors = [];
var numColors = 500;

var particles = [];
var numParticles = 1000;
var theta = 0;
var inc = 0.1;



function preload(){

img=loadImage("dance.jpg")}


function setup() {
  createCanvas(800,800,WEBGL);
  frameRate(10);
  numSquares = width/squareSize;
  for(var i =0; i < numColors; i++){
  		colors[i] = [random(255),0,10];
  	
  }
  

  img.loadPixels();

  
  for(var j=0; j < numSquares; j++){  
    for(var i = 0; i < numSquares; i++){
       // fill(colors[int(random(0,colors.length-1))]);
      
      	var thisColor = img.get(cos(i/3),j/2);
      	var thatColor = img.get(i*4,j*4.5);
        var chosenColor;
           
      var choice = random(255);
      
      if(choice> 160){
       chosenColor = thisColor;
        
      } else {
     
      chosenColor = thatColor;
       
      }
      
      //squareSize = random(2,5);
      var a = new Particle(i*squareSize, j*squareSize, squareSize, chosenColor);
      
      particles.push(a);
     // rect(xStart + (i*squareSize), yStart+(j*squareSize), squareSize, squareSize);
    }
	} 
  
 //console.log(particles);

}

function draw() {
  // background(220);
  orbitControl();
  noStroke();
  scale(4);
  texture(img);
  sphere(40);
  
  translate(-200,-200)

    for(var i = 0; i < particles.length; i++){
      
     // particles[i*j].update(theta);
      
      // console.log(particles[1]);

      particles[i].display();
     
    }
  
  
  
 // image(img, 0, 0, 800, 800)
  theta+=inc

}

var Particle = function(x,y,size,col){
	this.x = x;
  this.y = y;
  this.size = size;
  this.color = col;

  this.display = function(){
    fill(this.color);
    this.size = random(this.size/2,this.size+15.5);
    rect(random(this.x),random(this.y),this.size,this.size+2)
   
  }
  
  
  

}