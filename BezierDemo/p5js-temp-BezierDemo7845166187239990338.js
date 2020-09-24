var x =[100, 200, 200, 100];
var y =[100, 100, 200, 200];
var whichDot = -1;

function setup() 
{
  createCanvas(800,800);
  textSize(16);
  textFont("Arial");
}

function draw() 
{
  drawCurve();
}

function drawCurve()
{
  background(64);
  fill("white");
  text("vertex(x[0],y[0]);",10,15);
  text("bezierVertex(x[1],y[1],  x[2],y[2],  x[3],y[3]);",10,35);
  stroke("cyan");
  fill("yellow");
  strokeWeight(5);
  beginShape();
    vertex(x[0],y[0]);
    bezierVertex(x[1],y[1],  x[2],y[2],  x[3],y[3]);
  endShape(CLOSE);
  
  noFill();
  strokeWeight(1);
  for (var i=0; i<4; i++)
  {
      stroke(255,128+32*i,255-32*i);
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
