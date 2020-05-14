function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#eeeeee');
    noLoop();
}

function draw() {
    background(random(255), random(255), random(255));
    translate(width/2, height/2);   // start drawing from center of screen
    for (let n = 0; n < 10; n++) {
        stroke(random(255), random(255), random(255));  // multi-colored line strokes
        for (let i = 0; i < 360; i+=2) {
            push()
                var x1 = random(50, 150);
                var x2 = random(150, 350);
                strokeCap(PROJECT);
                strokeWeight(4);    
                rotate(radians(i)); // rotate to position straight line is being drawn
                line(x1, 0,  x2, 0);  // create straight line from x1 to x2
            pop()
        }
    }
    // saveFrames('#', 'jpg', 1, 25);   // save the images
}

function keyPressed() {
    redraw();
}