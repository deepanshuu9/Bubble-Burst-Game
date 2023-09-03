function makeBubble() {
    var clutter = '';
    for (var i = 1; i <= 168; i++) {
        var rm = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rm}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

var timer = 3;
function runTime() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector('#pbtm').innerHTML = `<h2 id='pbtm'>Game Over</h2>`;
        }
    }, 1000);
}

var hitrn = 0;
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;
}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function (des) {
    var clickednum = Number(des.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


makeBubble();
getNewHit();
runTime();
