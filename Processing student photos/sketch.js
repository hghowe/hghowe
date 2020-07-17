let studentImages = [];
let numStudents = 22;
let currentStudent = 0;
let zoom_factor = 1.0;
let zoom_velocity = 0.4;
let zoom_max = 1.7;
let image_width = 60;
let image_height = 75;
let students_per_row = 6;
let rotation_range = 0.5;

function preload()
{
  for (i=1; i<=numStudents; i++)
  {
    img = loadImage("images/student"+i+".png");
    studentImages.push(img);
  }
  // randomize the order....
  for (i=0; i<100; i++)
  {
    which = random(0,numStudents-1);
    studentImages.splice(which,0,studentImages.pop());
  }
}

function setup()
{
  createCanvas(450,350);
  // put setup code here
  currentStudent = int(random(0,numStudents-1));

}

function draw()
{
  background(255);
  for (i = 0;i<numStudents; i++) // draw all students
  {
      image(studentImages[i],image_width/2+(i%students_per_row)*image_width,
                             image_height/2+int(i/students_per_row)*image_height);

  }
  // do the zoom math
  zoom_factor += zoom_velocity * deltaTime/1000;
  if (zoom_factor >= zoom_max && zoom_velocity>0)
    zoom_velocity *=-1;
  if (zoom_factor <= 1.0 && zoom_velocity<0)
  {
    zoom_velocity *=-1;
    zoom_factor = 1;
    currentStudent = int(random(0,numStudents-1));
  }
  // draw current student rotated and zoomed.
  translate(image_width+(currentStudent%students_per_row)*image_width,
            image_height+int(currentStudent/students_per_row)*image_height);
  rotate((zoom_factor-1)*(2*rotation_range*noise(millis()*0.003)-rotation_range));
  image(studentImages[currentStudent],
           -(zoom_factor)*image_width/2,
           -(zoom_factor)*image_height/2,
           image_width*zoom_factor,
           image_height*zoom_factor);

}
