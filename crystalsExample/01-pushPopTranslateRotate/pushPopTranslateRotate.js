// https://www.youtube.com/watch?v=se9rsp2VMWk&list=PLyRZnpOSgMj3K8AV2I6UldnvTj6d_Zrf0&index=3

function setup() {
    createCanvas(500, 500, SVG);
    noLoop();
    // rotate defaults to radians
    // change rotate to use degrees
    angleMode(DEGREES);
    // rect defaults drawing origin at upper left
    // change rect to draw origin at center 
    rectMode(CENTER)
}

function draw() {
    background('teal');
    fill(0);

    // push and pop isolates matrix changes to only what is between
    push();
        translate(width/2, height/2);
        rotate(45)
        rect(0, 0, 25, 25);
    pop();

    fill('red');
    rect(0, 0, 25, 25);
}