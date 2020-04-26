// draw a hexagon 
function hexagon(posX, posY, radius) {
    const rotAngle = 360/6;

    beginShape();
        for(let i=0; i<6; i++) {
            // go around circle finding points for hexagon
            // draw from it to the one before creating sides
            const thisVertex = pointOnCircle(posX, posY, radius, i*rotAngle);
            vertex(thisVertex.x, thisVertex.y);
        }
    endShape(CLOSE);
}

// find point on a circle and return it
function pointOnCircle(posX, posY, radius, angle) {
    const x = posX+radius*cos(angle);
    const y = posY+radius*sin(angle);
    return createVector(x,y);
}

// num of shapes to draw; 6 or 12
function randomSelectTwo() {
    const randLines = random(1);    
    if(randLines >0.5) {
        return true;
    } else {
        return false;
    }
}

// colour of shapes
function getRandomFromPalette() {
    const randColors = floor(random(0, PALETTE.length));    
    return PALETTE[randColors];
}