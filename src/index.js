import './styles.css';
import Project from './modules/project';
import Item from './modules/item';
import { projectLoad, itemLoad } from './modules/render';
import loadLocal from './modules/load';
import saveLocal from './modules/save';

const addPrjBtn = document.getElementById("add-project");
const prjForm = document.getElementById("project-form");
const prjArray = [];
const addItemBtn = document.getElementById("add-item");
const itemForm = document.getElementById("item-form");
let activeProject = null;

function setActiveProject(project) {
    activeProject = project;
    itemLoad(project.items);

    document.querySelectorAll(".projects").forEach(item => {
        item.classList.remove('active');
    });

    const activeElement = document.querySelector(`[data-project-id="${project.id}"]`);
    if (activeElement) activeElement.classList.add('active');

}

prjForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const prjName = document.getElementById("project-name");
    const prjDesc = document.getElementById("project-desc");
    const prjDate = document.getElementById("project-date");

    const newProject = new Project(prjName.value, prjDesc.value, prjDate.value);
    prjArray.push(newProject);
    setActiveProject(newProject);
    projectLoad(prjArray, setActiveProject);
    prjForm.reset();
    prjForm.style.display = 'none';
})

addPrjBtn.addEventListener("click", () => {
    prjForm.style.display = 'flex';
})

document.getElementById("project-close").addEventListener('click',() => {
        document.getElementById('project-form').style.display = 'none';
});


addItemBtn.addEventListener("click", () => {
    itemForm.style.display = 'flex';
})
document.getElementById("item-close").addEventListener('click',() => {
        document.getElementById('item-form').style.display = 'none';
});

itemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const itemName = document.getElementById("item-name");
    const itemDesc = document.getElementById("item-desc");
    const itemDate = document.getElementById("item-date");

    const newItem = new Item(itemName.value, itemDesc.value, itemDate.value);
    if(activeProject) {
        activeProject.items.push(newItem);
        itemLoad(activeProject.items);
    }
    itemForm.reset();
    itemForm.style.display = 'none';
})
