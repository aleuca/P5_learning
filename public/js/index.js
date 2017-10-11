//=========================
//Setup & draw functions
//=========================

var x = 100
var y = 100
var radiusX = 10
var radiusY = 10
var speed = 5

function setup() {
    makeCanvas()
}

function makeCanvas(){
    var canvas = createCanvas(($(window).width()), $(window).height() + 50)
    canvas.parent('canvas-background')
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    // clear()
    // background("rgba(255, 255, 255, 1)")
    update()
}

function update() {
    stroke("rgba(50, 50, 50, 0.8)")
    fill("rgba(50, 50, 50, 0.8)")
    if (x >= windowWidth) {
        speed = -5
    }
    if (x <= 0) {
        speed = 5
    }
    x = x + speed
    ellipse(x, y, radiusX, radiusY)
    // if x reaches windowwidth then the ellipse starts subtracting 5
}




//=========================
//Interactivity functions
//=========================
function touchStarted() {
    clear()
    console.log("Touch!", mouseX, mouseY)
};
