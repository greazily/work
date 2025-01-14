gsap.registerPlugin(Flip);
let projects = document.querySelectorAll(".project"),
    previews = document.querySelectorAll(".preview__clip"),
    bar = document.getElementById("bar_moving"),
    index = 0;
    loop = setInterval(descend, 3000),
    hovering = false;


function descend(h){
    let hactive = h;
    projects.forEach(project => {
        project.classList.remove("highlight");
    });

    const state = Flip.getState(bar);
    if(hovering === true){
            projects[hactive].prepend(bar);
            index = Number(hactive);
    } else {
        if(index < projects.length -1) {
            index += 1;
            projects[index].prepend(bar);
        } else {
            index = 0;
            projects[index].prepend(bar);
        };
    };
    Flip.from(state, {
        duration: 0.5, 
        ease: "power1.inOut", 
        onComplete: ()=> {previewChanger(index)}
    });
    if(projects[index].contains(bar)){
        projects[index].classList.add("highlight");
    };
};

projects.forEach(project => {
    project.addEventListener("mouseover", ()=>{
        hovering = true;
        hoverCheck();
        descend(project.id);
    });
    project.addEventListener("mouseleave", ()=>{
        hovering = false;
        loop = setInterval(descend, 3000);
        hoverCheck();
    });
});

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


indexer(projects);
// indexer(previews);
