gsap.registerPlugin(Flip);
let projects = document.querySelectorAll(".project"),
    previews = document.querySelectorAll(".preview__clip"),
    bar = document.getElementById("bar_moving"),
    index = 0;
    loop = setInterval(descend, 3000),
    hovering = false;




function listing(){
    const state = Flip.getState(bar);
    if(hovering === true){
            projects[index].prepend(bar);
    } else {
        if(index < projects.length -1) {
            index += 1;
            projects[index].prepend(bar);
        } else {
            index = 0;
            projects[index].prepend(bar);
        };
    };
   const flip = Flip.from(state, {
        duration: 0.5, 
        ease: "power1.inOut", 
        onComplete: ()=> {
            previewChanger(index);
        }
    });
    if(projects[index].contains(bar)){
        projects[index].classList.add("highlight");
    };

    return flip;
};

function shrinkGrow(){
    const state = Flip.getState(bar);
    bar.classList.toggle("shrink");
    const flip = Flip.from(state, {
        duration: 0.3, 
        ease: "power1.inOut"
    });

    return flip;
};

function masterTL() {
    tl = gsap.timeline()

    tl.call(()=> shrinkGrow())
    tl.call(()=> listing())
    tl.call(()=> shrinkGrow())
  };

function hoverCheck(){
    if (hovering === false){
        loop;
    } else {
        clearInterval(loop)
    }
};

function indexer(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i;
    };
};

function previewChanger(index) {
        previews.forEach(clip => {
            clip.classList.remove("show");
        });
        previews[Number(index)].classList.add("show");
}

function descend(){
    console.log(hovering);
    projects.forEach(project => {
        project.classList.remove("highlight");
    });

    masterTL();
};

function listener() {
    projects.forEach(project => {
        project.addEventListener("mouseover", ()=>{
            hovering = true;
            hoverCheck();
            setTimeout(()=>{
                index = Number(project.id);
                descend();
            }, 1000)
        });
        project.addEventListener("mouseleave", ()=>{
            hovering = false;
            loop = setInterval(descend, 3000);
            hoverCheck();
        });
    });
};

function init(){
    indexer(projects);
    listener(projects);
}
init()
// indexer(previews);
