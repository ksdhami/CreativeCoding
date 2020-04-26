// https://www.youtube.com/watch?v=7GwhYcUqypk&list=PLyRZnpOSgMj3K8AV2I6UldnvTj6d_Zrf0&index=5

// using random to make decisions of lines
// random rule used to determine the output

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
    const randLines = random(1);    // num of shapes to draw
    let numShapes;
    if(randLines >0.5) {
        numShapes = SIDES;
    } else {
        numShapes = SIDES*2;
    }

    const randColors = floor(random(0, PALETTE.length));    // colour of shapes
    const strokeColor = PALETTE[randColors];

    noFill();
    stroke(PALETTE[0]); // outside circle

    push();
        translate(width/2, height/2);

        // ellipse the size of crystal 
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
        stroke(strokeColor); // inner lines

        // rotation variable for lines 
        const angle = 360 / numShapes;

        // create lines for each number of sides 
        for(let i = 0; i < numShapes; i++) {
            line(0, 0, 0, CRYSTAL_SIZE / 2);
            rotate(angle);
        }
        
    pop();
}