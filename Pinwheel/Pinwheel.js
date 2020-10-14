var pinwheelImage;
var i;
var scaleSize;
var angleRate;

function preload()
{
  // image from: https://www.howtogeek.com/448234/8-warning-signs-your-mac-might-have-a-problem-and-how-to-fix-it/
  pinwheelImage = loadImage("data/pinwheel.png");
}

function setup() 
{
   createCanvas(800,800);
   background("white");
   i = 0;
   scaleSize = 1.5;
   angleRate = 1;
}


function draw() 
{
  scl = lerp(0.25,scaleSize, noise(i));
  angle = lerp(0,4*PI, noise(angleRate*i+100));
  var x = lerp(0,800, noise(i+200));
  var y = lerp(0,800, noise(i+300));
  
  translate(x,y);
  scale(scl);
  rotate(angle);
  translate(-pinwheelImage.width/2, -pinwheelImage.height/2);
  image(pinwheelImage,0,0);
  
  
  i = i+0.01;
}

function mouseMoved(event)
{
   fracX = event.x/800;
   fracY = event.y/800;
   
   scaleSize = lerp(0.5,6,fracX);
   angleRate = lerp(0.2,3,fracY);
  
}
