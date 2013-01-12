// Setting the height and width of the canvas element
var stageWidth = canvas.width;
var stageHeight = canvas.height;

// Creating game obstacles
var obstacles = [];
var bullets = [];
var explosions = [];

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

var drawBackground = function () {
    context.rect(0, 0, stageWidth, stageHeight);
    context.fillStyle = "#fff";
    context.fill();
};

var drawFrameCount = function () {
    context.font = '16px courier';
    context.fillStyle = "#000";
    context.fillText("Frame Count: " + frameCount, 700, 30);
    //context.fillText("Score: " + player.score, 550, 30);

};

var loop = function () {
    frameCount += 1;
    drawBackground();
    drawFrameCount();
    requestAnimationFrame(loop);
};
loop();