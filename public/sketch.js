var angle = 0;
var slider;

function setup() {
    createCanvas(600, 600);
    slider = createSlider(0, PI, PI / 4, 0.01);
}

function draw() {
    background(51);
    angle = slider.value();
    stroke(255);
    translate(width / 2, height);
    branch(150);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
        branchRight(len);
        branchLeft(len);
    }
}

function branchLeft(len) {
    push();
    rotate(-angle);
    branch(len * .67);
    pop();
}

function branchRight(len) {
    push();
    rotate(angle);
    branch(len * .67);
    pop();
}