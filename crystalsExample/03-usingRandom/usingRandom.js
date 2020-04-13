// https://www.youtube.com/watch?v=7GwhYcUqypk&list=PLyRZnpOSgMj3K8AV2I6UldnvTj6d_Zrf0&index=5

// creating design constraints for later drawing
// used to check if drawings conform to design constraints 

const CRYSTAL_SIZE = 500;   // size of crystals to be made
const SIDES = 6;    // number of sides that crystal will have 
let PALETTE = [];

function setup() {
    createCanvas(530, 530, SVG);

    PALETTE = [
        color(255, 52, 154),    // pink
        color(4, 0, 152),    // blue
    ];

    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    testLines();
}

// design constraint function used for testing 
function testLines() {
    noFill();

    push();

        translate(width/2, height/2);
        stroke(PALETTE[0]);

        // ellipse the size of crystal 
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

        // rotation variable for lines 
        const angle = 360 / SIDES;

        // create lines for each number of sides 
        for(let i = 0; i < SIDES; i++) {
            stroke(PALETTE[1]);
            line(0, 0, 0, CRYSTAL_SIZE / 2);
            rotate(angle);
        }
        
    pop();
}