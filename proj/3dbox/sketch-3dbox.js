let angleZ = 0;
let numCubes = 20;
function setup() {
  createCanvas(400, 400, WEBGL);

  //noStroke()

}

function draw() {
  background(255)
  
    ambientLight(159, 230, 73);
     ambientMaterial(250);
  
    shininess(20);
     pointLight(232, 78, 252, 0,50, 50);
     // pointLight(252, 78, 223, 10, 50, 50);
    
 
  
  
  //just the usual for loop here
  for(let i =0; i < numCubes; i++){
  
      for (let z=0;z<numCubes; z++){
  //can also do zval and incorprate that in the xyz translation.
        //zval-=0.01 (change zval in order to change the yz..)
    
    push();
    //the location of each cube is determined by this translate function
    //notice how it is wrapped in its own individual transformation matrix
    //by the enclosing push() / pop()
    translate(-1000 + i*100, 300, -200*z);
    
    //each sphere rotates on its own axis 
    // because these rotations are also inside the push()/pop()
    rotateY(PI/1.2);
    rotateZ(angleZ);
    
    box(100);
     
    pop();
    
  }
    
  }
  
  
  
  
  
  
  angleZ+=0.05
}