var x =[100, 200, 200, 100];
var y =[150, 150, 250, 250];
var whichDot = -1;

function setup() 
{
  createCanvas(800,800);
  textSize(16);
  
}

function draw() 
{
  drawCurve();
}

function drawCurve()
{
  background(64);
  fill("white");
  textFont("Courier");
  textSize(12);
  text("beginShape();",10,15);
  text("vertex(x[0],y[0]);",30,35);
  text("bezierVertex(x[1],y[1],x[2],y[2],x[3],y[3]);",30,55);
  text("endShape(CLOSE);",10,75);
  textFont("Arial");
  textSize(16);
  text("<-- the code at left is what is making the yellow shape.", 400,15);
  text("Drag the numbered dots around to see what they do!",400,35);
  text("(Imagine a line from 0 -> 1 and one from 3 ->2)", 400, 55);
  stroke("cyan");
  fill("yellow");
  strokeWeight(5);
  beginShape();
    vertex(x[0],y[0]);
    bezierVertex(x[1],y[1],  x[2],y[2],  x[3],y[3]);
  endShape(CLOSE);
  
  
  strokeWeight(1);
  for (var i=0; i<4; i++)
  {
      stroke(255,128+32*i,255-32*i);
      fill(255,128+32*i,255-32*i);
      ellipse(x[i],y[i],10,10);
      text(""+i, x[i]+10, y[i]-10);
  }
}

function mousePressed()
{
  whichDot = -1;
  let d = 9999999;
  for (var i=0; i<4; i++)
  {
     d2 = pow(mouseX-x[i],2)+ pow(mouseY-y[i],2);
     if (d2 <d)
     {
        d=d2;
        whichDot = i;
     }
  }
}

function mouseDragged()
{
   if (whichDot == -1)
     return;
   x[whichDot] = mouseX;
   y[whichDot] = mouseY;
   drawCurve();
}
