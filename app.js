// Setting the height and width of the canvas element
var stageWidth = canvas.width;
var stageHeight = canvas.height;

// Creating game elements
var lights = [];

var mouseX = stageWidth / 2;
var mouseY = 0;

var NUM_LIVES = 3;
var frameCount = 0;

var gameState = {
    NOT_STARTED: 0,
    PLAYING: 1,
    PAUSED: 2,
    GAME_OVER: 3
};

var LightObject = function (startX, startY, endX, endY) {
    this.startingX = startX,
    this.startingY = startY,
    this.movingX = startX,
    this.movingY = startY,
    this.endingX = endX,
    this.endingY = endY
};

var drawBackground = function () {
    context.rect(0, 0, stageWidth, stageHeight);
    context.fillStyle = "#fff";
    context.fill();
};

var drawFrameCount = function () {
    context.font = '16px courier';
    context.fillStyle = "#000";
    context.fillText("Frame Count: " + frameCount, 700, 30);
};

var generateLight = function () {
    var light = new LightObject(0, random(0, stageHeight), stageWidth, stageHeight/2);
    lights.push(light);
};

var drawLight = function () {
    for(var i = 0; i < lights.length; i++) {
        var light = lights[i];
        if(light.movingX !== light.endingX) {
            context.beginPath();
            context.moveTo(light.startingX, light.startingY);
            context.lineTo(light.movingX, light.movingY);
            context.fillStyle = "#000";
            context.stroke();

            light.movingX += 1;
        } else {
            lights.splice(i, 1);
        }
    }
};

var loop = function () {
    frameCount += 1;
    drawBackground();
    drawFrameCount();
    generateLight();
    drawLight();
    requestAnimationFrame(loop);
};
loop();