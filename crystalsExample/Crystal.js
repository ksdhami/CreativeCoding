class Crystal{
    constructor(posX, posY){
        this.x = posX;
        this.y = posY;
        this.layers = [] // array of layers that will be drawn; push into array what you want to draw

        // loop through array and create a random number and check against weight
        // if greater than shape weight, init the shape and add it to layers array
        layerConstructors.forEach((lcon) => {
            let picker = random(1);
            if (picker > lcon.weight) {
                this.layers.push(lcon.init());
            }
        });

    }

    render(){
        push();
        translate(this.x, this.y);
        this.layers.forEach((layer) => {
            layer.render();
        });
        pop();
    }
}