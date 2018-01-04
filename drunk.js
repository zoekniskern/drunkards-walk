function drunk(x,y){
    
    //attributes
    var xNow = x;
    var yNow = y;
    var maxStep;
    var xStep;
    var yStep;
    var hue;
    
    //randomizes path
    this.stagger = function(){
        //color changing
        hue = Math.floor(Math.random()*256);
        if(hue < 255){
            hue += 1;
        }
        else{
            hue = 0;
        }
        
        fill(hue, 100, 255);
        stroke(hue, 100, 255);
        
        //step stuff
        maxStep = 20;
        
        //negative and positive directions for path
        xStep = Math.floor(-Math.random()*maxStep+1 + Math.random()*maxStep);
        yStep = Math.floor(-Math.random()*maxStep+1 + Math.random()*maxStep);
        
        //draw line
        line(xNow, yNow, xNow+xStep, yNow+yStep);
        
        //new location of step
        xNow += xStep;
        yNow += yStep;
    }
    
    this.rally = function(){
        xNow = mouseX;
        yNow = mouseY;
    }
}