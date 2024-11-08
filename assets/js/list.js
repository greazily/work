
// setInterval(removeProject, 3000)

// function removeProject() {
//     let projectList = document.querySelector("#projects"),
//         projects = document.querySelectorAll(".project"),
//         firstproject = projects[0];
//     projectList.removeChild(firstproject);
//     projectList.appendChild(firstproject);
//     console.log(projectList, projects);
// }

// let projectList = document.querySelectorAll(".project");
// let i = 1;

// setInterval(highlighter, 1000)

// function highlighter() {
//             if(i !== projectList.length) {
//                 if(i !== 0) {
//                     projectList[i-1].classList.toggle("highlight");
//                 }
//                 projectList[i].classList.toggle("highlight");
//                 i += 1;
//             } else {
//                 projectList[projectList.length - 1].classList.toggle("highlight");
//                 projectList[0].classList.toggle("highlight");
//                 i = 1;
//             }
    
// }

// let projects = document.querySelectorAll(".project"),
//     projectsAmount = projects.length * 4,
//     projectsHeight = document.querySelector("#projects").offsetHeight + 13;

// console.log(projectsAmount, projectsHeight);

// gsap.to("#bar_moving", {y: projectsHeight, duration: projectsAmount, repeat: -1, ease: "none"});




// ////////////////////////////////////////////////////////////////////////

// gsap.registerPlugin(Flip);

// let bar = document.getElementById("bar_moving"),
//     props = "gridRow";

// const state = Flip.getState(bar, props);

// // bar.style.gridRow = "2";

// FLip.from(state, {duration: 2, ease: "power1.inOut", absolute: true});

///////////////////////////////////////////////////////////////////////////

gsap.registerPlugin(Flip);
let projects = document.querySelectorAll(".project");

let bar = document.getElementById("bar_moving"),
    index = 0;

setInterval(descend, 3000);

function descend(){
const state = Flip.getState(bar);
    projects[index].classList.toggle("highlight");
    if(index < projects.length -1) {
        projects[index+1].prepend(bar);
        index += 1;
    } else {
        index = 0;
        projects[index].prepend(bar);
    }
Flip.from(state, {duration: 1, ease: "power1.inOut", onComplete: ()=> {
    projects[index].classList.toggle("highlight");
}})


}
