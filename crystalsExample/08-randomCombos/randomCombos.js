// https://www.youtube.com/watch?v=tYDtsk5tOgM&list=PLyRZnpOSgMj3K8AV2I6UldnvTj6d_Zrf0&index=10

// outline circles 

const CRYSTAL_SIZE = 500;   // size of crystals to be made; divide by 2 for radius
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
    // testLines();
    outlineShape();
    simpleLines();
    circles(); 
}

function circles() {
    const numCircles = SIDES;
    const angle = 360/numCircles;
    const shapeSize = (CRYSTAL_SIZE/2) * 0.93;
    const center = (CRYSTAL_SIZE/2) - (shapeSize/2);
    const strokeColor = getRandomFromPalette();

    stroke(strokeColor);
    strokeWeight(1);

    push()
        translate(width/2, height/2);
        for (let i = 0; i <= numCircles; i++) {
            ellipse(center, 0, shapeSize, shapeSize);
            rotate(angle);
        }
    pop()
}

function simpleLines() {
    const innerCircles = 8;
    const numInnerCircles = randomSelectTwo() ? innerCircles : int(innerCircles * 1.25);   // 8 or 10
    const step = (CRYSTAL_SIZE/2)/numInnerCircles;  // distance between each inner circle
    const start = floor(random(0, numInnerCircles));    // 0 to last-1
    const stop = floor(random(start, numInnerCircles+1));   // start to last


    let numShapes = randomSelectTwo() ? SIDES : SIDES*2;
    const weight = randomSelectTwo() ? 1:3;
    const strokeColor = getRandomFromPalette();

    // rotation variable for lines 
    const angle = 360 / numShapes;

    noFill();
    stroke(strokeColor);
    strokeWeight(weight);
    push();
        translate(width/2, height/2);
        // create lines for each number of sides 
        for(let i = 0; i < numShapes; i++) {
            line(start*step, 0, stop*step, 0);
            rotate(angle);
        }
    pop();
}

function outlineShape() {
    const strokeColor = getRandomFromPalette();
    const weight = randomSelectTwo() ? 1:3;
    const hexagonTrue = randomSelectTwo();  // decide what shape to draw

    stroke(strokeColor);
    strokeWeight(weight);

    push();
        translate(width/2, height/2);
        if(hexagonTrue) {   // create either hexagons or circles
            hexagon(0, 0, CRYSTAL_SIZE/2);
        } else {
            ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
        }
    pop();
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


