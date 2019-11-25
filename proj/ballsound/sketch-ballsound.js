var Bubble1;
var Bubble2;
let Walls = [];

function setup() {
  createCanvas(800, 400);
   
  
  Bubble1=new Bubble(100,200,50,1.5,[80,199,199]);
  Bubble2=new Bubble(500,200,50,2,[232, 178, 30]);
   
  Walls[0]=new Wall (5,5,width-5,5);
  Walls[1]=new Wall (5,height-5,width-5,height-5);
  Walls[2]=new Wall (5,5,5,height-5);
  Walls[3]=new Wall(width-5,5,width-5,height-5);
}



function draw() {

   background(255);
  Bubble1.hit();
  Bubble1.move();
  Bubble1.display();
  
    Bubble2.hit();
    Bubble2.move();
  Bubble2.display();
  
for(let i=0;i<4;i++){
Walls[i].display();
}
 
}



function Bubble(x,y,size,speed,color){
 this.x=x;
  this.y=y;
  this.size=size;
  this.xspeed=speed;
  this.yspeed=speed;
  this.env=new p5.Envelope();
  this.env.setADSR(0.01,0.1,0.2,0.05);
  this.env.setRange(0.2,0);
  this.osc=new p5.Oscillator();
  this.osc.setType ('sine');
  this.osc.amp (this.env);
  this.osc.start();
  this.color=color
  
  this.display=function(){
    noStroke();
  fill (this.color);
    ellipse(this.x,this.y,this.size);
  }
    
 
  
  this.hit=function(){
  
    if (this.x>width- this.size/2 - 5 || this.x < this.size/2 + 5)
    {this.xspeed = this.xspeed * -1;
                     this.playSound();}
    if(this.y>height- this.size/2 - 5 || this.y < this.size/2 + 5)
    {this.yspeed = this.yspeed*-1;
                     this.playSound();}
  
  }

  
  this.move=function(){
  this.x=this.x+this.xspeed;
    this.y=this.y+this.yspeed;
  }
  
   this.playSound= function(){     
     this.osc.freq(random(200,1000));
  this.env.play();
  }
} 




function Wall(x1,y1,x2,y2){
this.x1=x1;
  this.y1=y1;
  this.x2=x2;
  this.y2=y2;
  
  this.display=function(){
  strokeWeight(1);
    stroke(15, 72, 110);
    line(this.x1,this.y1,this.x2,this.y2);
    
  
  }

}