//=========================
//Setup & draw functions
//=========================

var ball = {
    direction: 1,
    x: 100,
    y: 100,
    radiusX: 10,
    radiusY: 10,
    magnitude: 5
}

var ball2 = {
    direction: 1,
    x: 500,
    y: 500,
    radiusX: 20,
    radiusY: 20,
    magnitude: 4
}

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

// runs every frame
function draw() {
    clear()
    background("rgba(255, 255, 255, 1)")
    updateBall()
    updateBall2()

}

function updateBall() {
    // outline of ball
    stroke("rgba(50, 50, 50, 0.8)")
    // color of ball
    fill("rgba(50, 50, 50, 0.8)")
    // direction/speed of ball
    bounce(ball)
    follow(ball2, ball)
    ball.x = ball.x + (ball.direction * ball.magnitude)
    ellipse(ball.x, ball.y, ball.radiusX, ball.radiusY)
    ball.y = ball.y + (ball.direction * ball.magnitude)
}

function updateBall2() {
    // outline of ball
    stroke("rgba(50, 50, 50, 0.8)")
    // color of ball
    fill("rgba(50, 50, 50, 0.8)")
    ellipse(ball2.x, ball2.y, ball2.radiusX, ball2.radiusY)
    bounce(ball2)
    follow(ball2, ball)
    ball2.x = ball2.x + (ball2.direction * ball2.magnitude)
    ball2.y = ball2.y + (ball2.direction * ball2.magnitude)
}


// makes ball bounce off edges of screen
function bounce(obj) {
    if (obj.x >= windowWidth || obj.y >= windowHeight) {
        obj.direction = -1
    }
    if (obj.x <= 0 || obj.y <= 0) {
        obj.direction = 1
    }
}


function follow(obj, obj2) {
    if (obj2.x >= obj.x || obj2.y >= obj.y) {
        obj.direction = 1
    }
    if (obj2.x <= obj.x || obj2.y <= obj.y) {
        obj.direction = -1
    }
}

//=========================
//Interactivity functions
//=========================
function touchStarted() {
    clear()
    console.log("Touch!", mouseX, mouseY)
}
