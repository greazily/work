let h, w, interval;
function init() {
    let boundry = document.querySelector(".background__graphics");
    h = boundry.offsetHeight;
    w = boundry.offsetWidth;
    console.log(w, h);
    clearInterval(interval);
    interval = setInterval(randomCycle, 6000);
};

function randomCycle() {
    let graphics = document.querySelectorAll(".graphic__element");
    console.log(graphics);

       
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
randomCycle();
init();

let timeOut;
window.onresize = ()=> {
    clearTimeout(timeOut);
    timeOut = setTimeout(init, 100)
};