var x =[100, 200, 200, 100];
var y =[100, 100, 200, 200];

function setup() 
{
  createCanvas(800,800);
  
}

function draw() 
{
  background(128);
  drawCurve();
}

function drawCurve()
{
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
      stroke(255,64*i,255-64*i);
      ellipse(x[i],y[i],10,10);
  }
}
