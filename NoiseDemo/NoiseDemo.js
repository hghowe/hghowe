t=0;

function setup() 
{
  
  createCanvas(800,800);
  sliderA = createSlider(0,200,50,2);
  sliderB = createSlider(0,0.1,0.03,0.0025);
  sliderC = createSlider(0,15,0,0.05);
  
  sliderA.position(100,20);
  sliderB.position(100,50);
  sliderC.position(100,80);
  
  sliderA.style('width','200px');
  sliderB.style('width','200px');
  sliderC.style('width','200px');
}


function draw() {
  background("white");
  fill("black");
  stroke(0);
  textFont("Courier",18);
  
  text("A",50,35);
  text("B",50,65);
  text("C",50,95);
  
  var A = sliderA.value();
  var B = sliderB.value();
  var C = sliderC.value();
  
  text(A, 350, 35);
  text(B, 350, 65);
  text(C, 50, 95);
  

  text("A * noise(i)",50,200);
  text("i = i + B",50,225);
  text(floor(A*noise(t*B)), 775,212);
  
  text("A * noise(i + C)",50, 400);
  text("i = i + B",50,425);
  text(floor(A*noise(t*B+C)), 775,412);
  
  textFont("Arial", 36);
  text("X", 20,220);
  text("Y", 20,420);
  
  for (var j=1; j<500; j= j+1)
  {
     i = j*B;
     line(j+249, 300-A*noise(i-B),j+250, 300-A*noise(i));
    
  }
  
  for ( j=1; j<500; j= j+1)
  {
     i = j*B;
     line(j+249, 500-A*noise(i-B+C),j+250, 500-A*noise(i+C));
  }
  
  stroke(128);
  line(250,300,750,300);
  line(250,300,250,100);
  
  line(250,500,750,500);
  line(250,500,250,310);
  
  line(300,510,300,800);
  line(300,510,600,510);
  ellipse(t+250, 300-A*noise(t*B),10,10);  
  ellipse(t+250, 500-A*noise(t*B+C),10,10);  
  ellipse(300+A*noise(t*B), 510+A*noise(t*B+C),
          10,10);
    
  
  t= (t+1)%500;
  
  
  
}
