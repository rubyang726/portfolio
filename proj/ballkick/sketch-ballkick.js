var numCircles=30;
var circles=[];
let kick;
let fft;



function preload(){

 kick=loadSound('kick.mp3')


}


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);

  fft = new p5.FFT();
  
  
  
  for(let i=0;i<numCircles;i++){
  
  circles[i]=new Circle(random (50, width - 50), random (50, height - 50), random(10,100),[random(255),random(255),random(255)])
  
  }
  
  
  setInterval(playSound, 1000)
}

function draw() {
  background(255);
  
  
  spectrum = fft.analyze();
  
  for(let i=0;i<numCircles;i++){
 
    circles[i].checkWalls();
    circles[i].update(spectrum[i]);
    
    circles[i].display();

  }
  

}






function Circle(x,y,size,col){
this.x=x;
  this.y=y;
  this.size=size;
  this.col=col;
  
  this.xSpeed=random(-3,3);
  this.ySpeed=random(-4,4);
  
  this.display=function(){
  
    fill(this.col);
  ellipse(this.x,this.y,this.size);
  
  }
  
  
  
  this.update=function(input){
  
    
    this.col = [input, 190, 190];
    this.oldSize = this.size
    if(input > 100){
      this.size = this.size + 1;
    } else {
      this.size = this.oldSize;
     // this.size = this.size -100;
    }
  this.x=this.x+this.xSpeed;
    this.y=this.y+this.ySpeed;
  
  }


  
  this.checkWalls=function(){

if(this.x >width-this.size||this.x<this.size){this.xSpeed=this.xSpeed *-1;}
  if(this.y>height-this.size||this.y<this.size){this.ySpeed=this.ySpeed*-1;}


}

  playSound=function(){
  
  kick.play()}
 
  


}