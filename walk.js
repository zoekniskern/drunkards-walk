//Zoe Kniskern
//Drunkard's Walk
//calls drunk.js

var testDrunk;
var mob = new Array();
var mobSize = 5;
var move = true;

function setup(){
    //setup stuff
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,255);
    //background set here so that the line shows
    background(61);
    
    //initialize new walk
    //hardwire's drunk start point
    //testDrunk = new drunk(400,400);
    
    //fill array
    for(var i = 0; i < mobSize; i++){
        mob[i] = new drunk(Math.floor(Math.random()*windowWidth),Math.floor(Math.random()*windowHeight));
    }
    
    window.prompt("Hit the space bar to pause \nHit the space bar twice times to restart \nClick to start a new walk \nHit 'c' to clear");
}

function draw(){
    //makes it walk
    //testDrunk.stagger();
    
    for(var i = 0; i < mobSize; i++){
        if(move = true){
            mob[i].stagger();
        }
    }
}

function mousePressed(){
    for(var i = 0; i < mobSize; i++){
        mob[i].rally();
    }
}

function keyTyped(){
    if(keyCode === 32){
        console.log("space b");
        if(move){
            noLoop();
            move = false;
        }
        else{
            loop();
            move = true;
        }
    }
    if(key === "c" ||key === "C"){
        background(61);
    }
}

//resize if window changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}