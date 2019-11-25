
 //letters[0] would be a
//a 2d array looks like
//let twoD = [[1,3],[5,20]];
//twoD[0] is [1,3]
// twoD[0][1] would be 3
//or twoD[0][0] = 1
//or twoD[1][0] = 5
//or twoD [1][1] = 20


let letterWidth = 20;
let letterHeight = 20;

let cols, rows;
let sounds = [];
let soundCounter = 0;
let numberSounds = 19;

let letterboxes;

function preload(){

A=loadSound('A_1.mp3')
sound=loadSound('sound_1 1.mp3')
  elephant=loadSound('elephant_1.mp3')
  beaten=loadSound('beaten_1.mp3')
  wit=loadSound('with_1 1.mp3')
  candy=loadSound('candy_1.mp3')
  and=loadSound('and.mp3')
  little=loadSound('little_1 1.mp3')
  pops=loadSound('pops_1 1.mp3')
and1=loadSound('and_1.mp3')
  chews=loadSound('chews_1.mp3')
  all=loadSound('all_1.mp3')
  bolts=loadSound('bolts_1.mp3')
  and3=loadSound('and_3.mp3')
  reckless=loadSound('reckless_1 1.mp3')
  rats=loadSound('rats_1 1.mp3')
  this1=loadSound('this 1.mp3')
  is1=loadSound('is_1 1.mp3')
  this2=loadSound('this_2 1.mp3')
sounds[0] = A;
 sounds[1]=sound;
  sounds[2]=elephant;
  sounds[3]=wit;
  sounds[4]=candy;
  sounds[5]=and;
  sounds[6]=little;
  sounds[7]=pops;
  sounds[8]=and1;
  sounds[9]=chews;
  sounds[10]=all;
  sounds[11]=bolts;
  sounds[12]=and3;
  sounds[13]=reckless;
  sounds[14]=rats;
  sounds[15]=this1;
  sounds[16]=beaten;
  sounds[17]=is1;
  sounds[18]=this2;
  
}

function setup() {
   
  createCanvas(600,600);
    document.getElementsByTagName("canvas")[0].setAttribute("id","canvas id");
  textAlign(CENTER);

  cols = width/letterWidth;
  rows = height/letterHeight;
  
  letterboxes = make2Darray(cols, rows );
  


for (let i = 0; i < cols; i++){

  for(let j = 0; j < rows; j++){
  
  // let thisLetter = letters[int(random(letters.length))];
   
    let coin = random(100);
    
    if(coin > 40){
      chosenColor = 0;
    } else {
      chosenColor = 255;
    }
    
    let thisBgCol = chosenColor;
    letterboxes[i][j] = new LetterBox(i*letterWidth, j*letterHeight,thisBgCol, sounds[soundCounter%numberSounds]);
    soundCounter++


  }
}

  // console.log(letterboxes);

}

function draw() {
  background(255);
  

  for (let i = 0; i < cols; i++){

  for(let j = 0; j < rows; j++){
   // letterboxes[i][j].checkMouse();
    letterboxes[i][j].display();
   // letterboxes[i][j].playSound();
      }
}

    
}



function LetterBox(x, y, backgroundCol, snd){
  this.x = x;
  this.y = y;
  this.bgcol = backgroundCol;
  this.originalbgcol = this.bgcol;
  this.counter = 0;
  this.clicked = false;
  this.playing = false;
  this.sound = snd;

  this.display = function(){
  
    if(this.counter > 0){
        this.counter -= 10;
    }
    
    if(this.counter < 10){
      this.bgcol = this.originalbgcol;
      this.playing = false;
      this.clicked = false;
    }
      
    
    fill(this.bgcol);
    rect(this.x, this.y, letterWidth, letterHeight);
    stroke(0);
//     text(this.letter, this.x + letterWidth/2, this.y + letterHeight/2 + letterHeight/4);
  
  }


  this.checkMouse = function(){
    //console.log("checking" + mouseX);
    if(mouseX > this.x && mouseX < this.x + letterWidth && mouseY > this.y && mouseY < this.y + letterHeight){
    
      if(this.playing === false){
      
        this.playSound();
      }
      
      
      this.clicked = true;
      this.playing = true;
      
      this.bgcol = [215, 232, 86,255];
      this.counter = 300 
    }
  
  
  }

  this.playSound = function(){
 
     this.sound.play()
   }
  
  
  
  
  

}


function mouseDragged(){

  for(let i =0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      letterboxes[i][j].checkMouse();
    }
  }


}


function mousePressed(){
  for(let i =0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      letterboxes[i][j].checkMouse();
    }
  }

}




function make2Darray(rows, cols){

  let arr = new Array(rows);
  for(let i = 0; i < arr.length; i++){
  
    arr[i]  = new Array(cols);
   }
  
  return arr



}

//change colors , fonts and layout
//sound play plan: click mouse trigers the sound. How many sound tracks???
//https://codepen.io/jryanj83/pen/eZPPbx