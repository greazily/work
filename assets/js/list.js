// gsap.registerPlugin(Flip);
// let projects = document.querySelectorAll(".project"),
//     previews = document.querySelectorAll(".preview__clip"),
//     bar = document.getElementById("bar_moving"),
//     index = 0;
//     loop = setInterval(timeLine, 3000),
//     hovering = false;


// function descend(){
//     projects.forEach(project => {
//         project.classList.remove("highlight");
//     });

//     // const state = Flip.getState(bar);
//     if(hovering === true){
//             projects[index].prepend(bar);
//     } else {
//         if(index < projects.length -1) {
//             index += 1;
//             projects[index].prepend(bar);
//             timeLine();
//         } else {
//             index = 0;
//             projects[index].prepend(bar);
//         };
//     };
//     // Flip.from(state, {
//     //     duration: 0.5, 
//     //     ease: "power1.inOut", 
//     //     onComplete: ()=> {previewChanger(index), timeLine()}
//     // });
//     if(projects[index].contains(bar)){
//         projects[index].classList.add("highlight");
//     };

//     previewChanger(index);
// };

// projects.forEach(project => {
//     project.addEventListener("mouseover", ()=>{
//         hovering = true;
//         index = Number(project.id)
//         hoverCheck();
//         timeLineIn();
//     });
//     project.addEventListener("mouseleave", ()=>{
//         hovering = false;
//         loop = setInterval(descend, 3000);
//         hoverCheck();
//         timeLineOut();
//     });
// });

// function hoverCheck(){
//     if (hovering === false){
//         loop;
//     } else {
//         clearInterval(loop)
//     }
// };

// function indexer(arr){
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].id = i;
//     };
// };

// function previewChanger(index) {
//         previews.forEach(clip => {
//             clip.classList.remove("show");
//         });
//         previews[Number(index)].classList.add("show");
// };
// function timeLine(){
//     tl = gsap.timeline();

//     tl.to(".bar", {width:"100%"})
//     tl.to(".bar", {width:"0%", onComplete: ()=> {descend()}}, ">1")
// };
// function timeLineIn(){
//     tl = gsap.timeline();

//     tl.to(".bar", {width:"100%"})
// };
// function timeLineOut(){
//     tl = gsap.timeline();

//     tl.to(".bar", {width:"0%", onComplete: ()=> {descend()}}, ">1")
// };


// indexer(projects);
// // indexer(previews);

let projects = document.querySelectorAll(".project"),
    previews = document.querySelectorAll(".preview__clip"),
    bar = document.getElementById("bar_moving"),
    hover = false;

    tl = gsap.timeline()

    tl.add("in")
    tl.to(bar, {duration: 0.5, width: "100%"}, "in")
    tl.add("out", ">+1")
    tl.to(bar, {duration: 0.5, width: "0%"}, "out")

    projects.forEach(project => {
        project.addEventListener("mouseover", ()=>{
            tl.addPause("out")
            console.log(project)
        })
        project.addEventListener("mouseleave", ()=>{
            tl.resume("out")
        })
    })