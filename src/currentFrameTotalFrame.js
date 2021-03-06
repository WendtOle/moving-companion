// point movement function
var pointMovement = function (frame, maxFrame, canvas) {
    let sx = -32,
    mx = canvas.width + 64;
    return {
        x: sx + mx * (frame / maxFrame),
        y: canvas.height / 2 - 16,
        r: 16 + 20 * (frame / maxFrame)
    };
};

// draw a state
var draw = function (pt, ctx, canvas) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
    ctx.fill();
};
 
// loop frames unrestricted
var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d');
canvas.width = 320;
canvas.height = 240;
 
var pt, frame = 0,
maxFrame = 300;
var loop = function () {
    requestAnimationFrame(loop);
    draw(pointMovement(frame, maxFrame, canvas), ctx, canvas);
    frame += 1;
    frame %= maxFrame;
};
loop();

//https://dustinpfister.github.io/2019/11/08/canvas-move/