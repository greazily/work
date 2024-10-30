let h, w, interval;
function init() {
    let boundry = document.getElementById("bgGraphics");
    h = boundry.offsetHeight;
    w = boundry.offsetWidth;
    randomCycle();
    clearInterval(interval);
    interval = setInterval(randomCycle, 6000);
};

function randomCycle() {
    let graphics = document.querySelectorAll(".graphic");

       
    graphics.forEach((graphic, index) => {
        setTimeout(()=>{
            let gh = graphic.offsetHeight,
                gw = graphic.offsetWidth;

            graphic.style.left = Math.floor(Math.random() * w)  - gw /2 + "px";
            graphic.style.top = Math.floor(Math.random() * h) - gh /2 + "px";
            graphic.style.opacity = Math.floor(Math.random() * 2);

        }, index * 1000)
        
    })

};
init();

let timeOut;
window.onresize = ()=> {
    clearTimeout(timeOut);
    timeOut = setTimeout(init, 100)
};