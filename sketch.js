function setup() {
createCanvas(700,500);
background("lightblue");
//   createSprite(400, 400);

//   tri1 = triangle(200,100,100,300,300,300);

 }

 function draw() {
    fill(rgb(66,52,129));
     strokeWeight(5);
stroke("indigo");
triangle(130,150,40,250,220,250);
triangle(540,150,450,250,630,250);

fill(rgb(41,135,173));

strokeWeight(5);
stroke("black");
rect(223,350,223,350,200,400,200,400);

noStroke();
rect(40,255,180,255,40,290,180,290);
shape(450,255,630,255,630,690,450,690);

fill("pink");
ellipse(540,320,60);
ellipse(130,320,60);
fill(rgb(66,52,129));
ellipse(340,500,170);

 }