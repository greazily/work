let h, w, interval;
function init() {
    let boundry = document.getElementById("bgGraphics");
    h = boundry.offsetHeight;
    w = boundry.offsetWidth;
    clearInterval(interval);
    interval = setInterval(randomCycle, 6000)
};

function randomCycle() {
    let graphics = document.querySelectorAll(".graphic"),
        xpositions = Array.from({length: 6}, () => Math.floor(Math.random() * w));

        console.log(xpositions)

       
    graphics.forEach((graphic, index) => {
        setTimeout(()=>{
            let gh = graphic.offsetHeight,
                gw = graphic.offsetWidth,
                xpos =  Math.round(Math.random() * w - gw / 2) ;
                ypos = Math.round(Math.random() * h - gh / 2) ;

                console.log(index);
            
            graphic.style.left = xpos + "px";
            graphic.style.top = ypos + "px";

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