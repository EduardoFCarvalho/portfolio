export default function projectElementHide() {}

const projects = document.querySelectorAll(".project-ext button")
const arrayProjects = Array.from(projects);

const descriptions = document.querySelectorAll(".project-ext dd")



arrayProjects.forEach((e, i) => {
  e.addEventListener('click', function hideDescription(){
    descriptions[i].classList.toggle('hide-description')
  }); 
});