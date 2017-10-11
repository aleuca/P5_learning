//=========================
//Setup & draw functions
//=========================
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
    clear()
    background("rgba(255, 255, 255, 1)")
    update()
}

function update() {
    stroke("rgba(50, 50, 50, 0.8)")
    fill("rgba(50, 50, 50, 0.8)")
    ellipse(100, 100, 10, 10)
}

//=========================
//Interactivity functions
//=========================
function touchStarted() {
    console.log("Touch!", mouseX, mouseY)
};
