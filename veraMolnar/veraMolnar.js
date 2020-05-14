var grid = 100;
var margin = 125;
var d;
var PALETTE = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	PALETTE = [
		color(220, 20, 60),
		color(60, 179, 113),
		color(0, 139, 139),
		color(153, 50, 204),
		color(255, 105, 180),
		color(255, 127, 80),
		color(255, 218, 185),
		color(30, 144, 255),
    ];
    frameRate(24);
	// noLoop();
}

function draw() {
	background("#eeeeee");
	noFill();

    d = grid; // size of quad

	for (let i = margin; i < width - margin; i += grid) {
		for (let j = margin; j < height - margin; j += grid) {
            let palleteNum = floor(random(8));
            stroke(PALETTE[palleteNum]);
            // stroke(random(255), random(255), random(255));
            strokeWeight(3);

			for (let numColor = 0; numColor < PALETTE.length; numColor++) {
				// quad points
				let x1 = random(d);
				let y1 = random(d);
				let x2 = random(d);
				let y2 = random(d);
				let x3 = random(d);
				let y3 = random(d);
				let x4 = random(d);
				let y4 = random(d);

				// draw quad and move position
				push();
                    translate(i, j);
                    quad(x1, y1, x2, y2, x3, y3, x4, y4);
				pop();
			}
		}
	}
}

function mousePressed() {
    noLoop();
    // saveCanvas('veraMolnar', 'jpg');   // save the images
}

function mouseReleased() {
    loop();
}
