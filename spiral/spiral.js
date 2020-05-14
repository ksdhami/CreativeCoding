var a = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    stroke(0, 15, 30);
    strokeWeight(25);
}

function draw() {
	background(0, 15, 30);
    translate(width/2, height/2);
    var scaleVar = map(mouseX, 0, width, 0.5, 5);
    scale(scaleVar);

    for (let i = 0; i < 100; i++) {
        fill(i*30, 255-i*75, 255-i*30);
        scale(0.95);
        rotate(radians(a));
        rect(0, 0, 600, 600);
    }

    a+=0.1;
}
