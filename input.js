const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

// Handling button clicks
btnLeft.addEventListener('click', function() {
    vx = -5;
    setTimeout(() => vx = 0, 100); // Stop after moving a bit
});

btnRight.addEventListener('click', function() {
    vx = 5;
    setTimeout(() => vx = 0, 100); // Stop after moving a bit
});

// Handling keyboard events
addEventListener("keydown", function(e) {
    if (e.code === 'ArrowRight') {
        vx = 5;
    } 
    if (e.code === 'ArrowLeft') {
        vx = -5;
    }
});

addEventListener("keyup", function(e) {
    if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
        vx = 0;
    }
});
