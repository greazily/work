
// setInterval(removeProject, 3000)

// function removeProject() {
//     let projectList = document.querySelector("#projects"),
//         projects = document.querySelectorAll(".project"),
//         firstproject = projects[0];
//     projectList.removeChild(firstproject);
//     projectList.appendChild(firstproject);
//     console.log(projectList, projects);
// }

let projectList = document.querySelectorAll(".project");
let i = 1;

setInterval(highlighter, 1000)

function highlighter() {
            if(i !== projectList.length) {
                if(i !== 0) {
                    projectList[i-1].classList.toggle("highlight");
                }
                projectList[i].classList.toggle("highlight");
                i += 1;
            } else {
                projectList[projectList.length - 1].classList.toggle("highlight");
                projectList[0].classList.toggle("highlight");
                i = 1;
            }
    
}
