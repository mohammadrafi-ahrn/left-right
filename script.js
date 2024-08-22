const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = 0;
let y = 25; // Set y to middle of canvas height
let vx = 0;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += vx;

    // Keep the rectangle within canvas bounds
    if (x < 0) x = 0;
    if (x + 50 > canvas.width) x = canvas.width - 50;

    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(update);
}

update();
