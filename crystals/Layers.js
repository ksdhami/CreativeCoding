class Layer {
	// base blueprint for anything related to a crystal
	// shared characteristics
	constructor() {
		this.sides = SIDES;
		this.numShapes = this.sides;
		this.angle = 360 / this.numShapes;
		this.stepsOut = 8;
		this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut;
		this.thinStroke = 1;
		this.thickStroke = 3;
		this.layerColor = getRandomFromPalette();
	}
}

class Circles extends Layer {
	constructor() {
		super();
		this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93;
		this.position = CRYSTAL_SIZE / 2 - this.shapeSize / 2;
	}

	render() {
		noFill();
		stroke(this.layerColor);
		strokeWeight(1);

		push();
		// translate(width / 2, height / 2);
		for (let i = 0; i <= this.numShapes; i++) {
			ellipse(this.position, 0, this.shapeSize, this.shapeSize);
			rotate(this.angle);
		}
		pop();
	}
}

class SimpleLines extends Layer {
	constructor() {
		super();
		this.numSteps = randomSelectTwo()
			? this.stepsOut
			: int(this.stepsOut * 1.25); // 8 or 10
		this.step = CRYSTAL_SIZE / 2 / this.numSteps; // distance between each inner circle
		this.start = floor(random(0, this.numSteps)); // 0 to last-1
		this.stop = floor(random(this.start, this.numSteps + 1)); // start to last
		this.weight = randomSelectTwo() ? this.thickStroke : this.thickStroke;
		this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2;
		this.angle = 360 / this.numShapes;
	}

	render() {
		noFill();
		stroke(this.layerColor);
		strokeWeight(this.weight);
		push();
		// translate(width / 2, height / 2);
		// create lines for each number of sides
		for (let i = 0; i < this.numShapes; i++) {
			line(this.start * this.step, 0, this.stop * this.step, 0);
			rotate(this.angle);
		}
		pop();
	}
}

class OutlineShape extends Layer {
	constructor() {
		super();
		this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke;
		this.hexagonTrue = randomSelectTwo(); // decide what shape to draw
	}

	render() {
		stroke(this.layerColor);
		strokeWeight(this.weight);

		push();
		// translate(width / 2, height / 2);
		if (this.hexagonTrue) {
			// create either hexagons or circles
			hexagon(0, 0, CRYSTAL_SIZE / 2);
		} else {
			ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
		}
		pop();
	}
}

class DottedLines extends Layer {
	constructor() {
		super();
		this.numShapes = randomSelectTwo() ? this.sides : this.sides * 2;
		this.angle = 360 / this.numShapes;
		this.shapeSize = 3;
		this.centerOfStep = this.singleStep;
	}

	render() {
		fill(this.layerColor);
		noStroke();
		push();
		// translate(width / 2, height / 2);
		for (let i = 0; i < this.numShapes; i++) {
			for (
				let j = this.centerOfStep;
				j < CRYSTAL_SIZE / 2;
				j += this.singleStep
			) {
				rect(j, 0, this.shapeSize, this.shapeSize);
			}
			rotate(this.angle);
		}
		pop();
	}
}

class CenteredShape extends Layer {
	constructor() {
		super();
		this.randomShape = random(1);
		this.shapeSize =
			floor(random(this.stepsOut / 2, this.stepsOut-2)) * this.singleStep;
	}

	render() {
		fill(this.layerColor);
		noStroke();
		push();
		// translate(width / 2, height / 2);
		if (this.randomShape < 0.1) {
			rect(0, 0, this.shapeSize * 2, this.shapeSize * 2);
		} else if (this.randomShape >= 0.1 && this.randomShape < 0.6) {
			ellipse(0, 0, this.shapeSize * 2, this.shapeSize * 2);
		} else if (this.randomShape >= 0.6) {
			rotate(this.angle / 2);
			hexagon(0, 0, this.shapeSize);
		}
		pop();
	}
}

class RingOfShapes extends Layer {
	constructor() {
		super();
		this.steps = floor(random(1, this.stepsOut));
		this.center = this.steps * this.singleStep;
		this.randomShape = random(1);
		this.direction = randomSelectTwo(); // used for triangle only
		this.fillColor = randomSelectTwo() ? this.layerColor : color(0, 1); // fill color or transparent
		this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke;

		// control size based of where it is in line
		if (this.steps < this.stepsOut / 2) {
			this.radius = floor(random(1, this.steps)) * this.singleStep; // start of line
		} else if (this.steps > this.stepsOut / 2) {
			this.radius =
				floor(random(1, this.stepsOut - this.steps)) * this.singleStep; // end of line
		} else {
			this.radius = floor(random(1, this.stepsOut / 2 + 1)) * this.singleStep; // middle of line
		}
	}

	render() {
		stroke(this.layerColor);
		fill(this.fillColor);
		strokeWeight(this.weight);
		push();
		// translate(width / 2, height / 2);
		for (let i = 0; i < this.numShapes; i++) {
			if (this.randomShape < 0.33) {
				ellipse(0, this.center, this.radius, this.radius);
			} else if (this.randomShape >= 0.33 && this.randomShape < 0.66) {
				rect(0, this.center, this.radius, this.radius);
			} else if (this.randomShape >= 0.66) {
				myTriangle(this.center, this.radius, this.direction);
			}
			rotate(this.angle);
		}
		pop();
	}
}

class SteppedHexagons extends Layer {
	constructor() {
		super();
		this.numSteps = randomSelectTwo() ? this.stepsOut : this.stepsOut * 1.25;
		this.centerOffset = (CRYSTAL_SIZE / 2) * 0.15; // 15% of radius should not have anything drawn in it
		this.singleStep = (CRYSTAL_SIZE / 2 - this.centerOffset) / this.numSteps;
		this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke;
	}

	render() {
		stroke(this.layerColor);
		noFill();
		strokeWeight(this.weight);
		push();
		// translate(width / 2, height / 2);
		rotate(this.angle / 2);
		for (let i = 1; i < this.numSteps + 1; i++) {
			hexagon(0, 0, this.centerOffset + i * this.singleStep);
		}
		pop();
	}
}
