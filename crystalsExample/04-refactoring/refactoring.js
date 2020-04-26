// https://www.youtube.com/watch?v=JQ6NqMd-yCw&list=PLyRZnpOSgMj3K8AV2I6UldnvTj6d_Zrf0&index=6

// refactor for reuseability 

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

function testLines() {
    let numShapes = randomSelectTwo() ? SIDES : SIDES*2;

    const strokeColor = getRandomFromPalette();

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

function randomSelectTwo() {
    const randLines = random(1);    // num of shapes to draw; 6 or 12
    if(randLines >0.5) {
        return true;
    } else {
        return false;
    }
}

function getRandomFromPalette() {
    const randColors = floor(random(0, PALETTE.length));    // colour of shapes
    return PALETTE[randColors];
}