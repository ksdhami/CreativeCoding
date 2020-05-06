const CRYSTAL_SIZE = 150; // size of crystals to be made; divide by 2 for radius
const SIDES = 6; // number of sides that crystal will have

const COLUMNS = 3;
const ROWS = 4;
const MARGIN = CRYSTAL_SIZE / 2;
const PADDING = CRYSTAL_SIZE * 0.2;
const GRIDBOX = CRYSTAL_SIZE + PADDING;

let PALETTE = [];
let ALL_CRYSTALS = [];

function setup() {
	const totalX = MARGIN * 2 + GRIDBOX * COLUMNS;
	const totalY = MARGIN * 2 + GRIDBOX * ROWS;
	createCanvas(totalX, totalY, SVG);

	PALETTE = [
		color(255, 52, 154), // pink
		color(4, 0, 152), // blue
	];

	noLoop();
	angleMode(DEGREES);
	rectMode(CENTER);
}

function draw() {
	// go to point on screen and draw a crystal
	// continue to do this until screen is filled

	for (let x = 0; x < COLUMNS; x++) {
		for (let y = 0; y < ROWS; y++) {
			const posX = MARGIN * 2 + x * GRIDBOX;
			const posY = MARGIN * 2 + y * GRIDBOX;
			ALL_CRYSTALS.push(new Crystal(posX, posY));
		}
	}

	ALL_CRYSTALS.forEach((crystal) => {
		crystal.render();
	});
}
