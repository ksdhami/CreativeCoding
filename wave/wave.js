var yStep;
var arcSize;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("#eeeeee");
	
	let xc = constrain(mouseX, 0, width);  // xc is the mouseX, but constrained
    let yc = constrain(mouseY, 0, height); // yc is the mouse, but constrained
    
    yStep = yc;
    arcSize = xc;

    noFill();
    stroke(20);
    strokeWeight(5);

    for (let y = 0; y < height; y+=yStep/2) {
        for (let x = 0; x < width+arcSize; x+=arcSize) {
            arc(x, y, arcSize/2, arcSize/2, 0, PI);
            arc(x+arcSize/2, y, arcSize/2, arcSize/2, PI, TWO_PI);
        }
        
    }
}
