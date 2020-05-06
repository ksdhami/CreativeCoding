// draw a hexagon
function hexagon(posX, posY, radius) {
	const rotAngle = 360 / 6;

	beginShape();
	for (let i = 0; i < 6; i++) {
		// go around circle finding points for hexagon
		// draw from it to the one before creating sides
		const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
		vertex(thisVertex.x, thisVertex.y);
	}
	endShape(CLOSE);
}

// find point on a circle and return it
function pointOnCircle(posX, posY, radius, angle) {
	const x = posX + radius * cos(angle);
	const y = posY + radius * sin(angle);
	return createVector(x, y);
}

// num of shapes to draw; 6 or 12
function randomSelectTwo() {
	const randLines = random(1);
	if (randLines > 0.5) {
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

function testLines() {
	let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

	const strokeColor = getRandomFromPalette();

	noFill();
	stroke(PALETTE[0]); // outside circle

	push();
	translate(width / 2, height / 2);

	// ellipse the size of crystal
	ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
	stroke(strokeColor); // inner lines

	// rotation variable for lines
	const angle = 360 / numShapes;

	// create lines for each number of sides
	for (let i = 0; i < numShapes; i++) {
		line(0, 0, 0, CRYSTAL_SIZE / 2);
		rotate(angle);
	}

	pop();
}

function myTriangle(center, radius, direction) {
	if (direction) {
		beginShape();
		vertex(center + radius * cos(0), radius * sin(0));
		vertex(center + radius * cos(120), radius * sin(120));
		vertex(center + radius * cos(240), radius * sin(240));
		endShape(CLOSE);
	} else {
		beginShape();
		vertex(center + radius * cos(180), radius * sin(180));
		vertex(center + radius * cos(300), radius * sin(300));
		vertex(center + radius * cos(60), radius * sin(60));
		endShape(CLOSE);
	}
}

const layerConstructors = [
	{
		name: "Outline Shape",
		init: () => new OutlineShape(),
		weight: 0.3,
	},
	{
		name: "Centered Shape",
		init: () => new CenteredShape(),
		weight: 0.3,
	},
	{
		name: "Circles",
		init: () => new Circles(),
		weight: 0.3,
	},
	{
		name: "Simple Lines",
		init: () => new SimpleLines(),
		weight: 0.3,
	},
	{
		name: "Dotted Lines",
		init: () => new DottedLines(),
		weight: 0.3,
	},
	{
		name: "Ring of Shapes",
		init: () => new RingOfShapes(),
		weight: 0.3,
	},
	{
		name: "Stepped Hexagons",
		init: () => new SteppedHexagons(),
		weight: 0.7,
	},
	{
		name: "Test Lines",
		init: () => new TestLines(),
		weight: 1,
	},
];
