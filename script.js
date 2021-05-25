score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
    // console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        deer = document.querySelector('.deer');
        deer.classList.add('animateDeer');
        setTimeout(() => {
            deer.classList.remove('animateDeer')
        }, 700);
    }
    if (e.keyCode == 39) {
        deer = document.querySelector('.deer');
        deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = deerX + 112 + "px";
        // deer.style.left = deerX + 180 + "px";
    }
    if (e.keyCode == 37) {
        deer = document.querySelector('.deer');
        deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = (deerX - 112) + "px";
        // deer.style.left = (deerX - 108) + "px";
    }
}

setInterval(() => {
    deer = document.querySelector('.deer');
    gameOver = document.querySelector('.gameOver');
    lion = document.querySelector('.lion');

    dx = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(deer, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(lion, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = `<h1 style="color: red; border: 5px solid red; border-radius :10px;">Game Over</h1>`;
        lion.classList.remove('lionAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(lion, null).getPropertyValue('animation-duration'));
            newDur = aniDur;
            lion.style.animationDuration = newDur + 's';

        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}