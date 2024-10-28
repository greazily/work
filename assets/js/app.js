let h, w;
function init() {
    let boundry = document.getElementById("bgG");
    h = boundry.offsetHeight;
    w = boundry.offsetWidth;

    setInterval(randomCycle, 1000);
};

function randomCycle() {
    let graphic = document.getElementById("g1"),
        gh = graphic.offsetHeight,
        gw = graphic.offsetWidth;
    


    graphic.style.top = Math.round(Math.random() * h - gh /2) + "px";
    graphic.style.left = Math.round(Math.random() * w - gw /2) + "px";
    graphic.style.opacity = Math.random;

};

init();