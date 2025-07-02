export function projectLoad(prjArray, setActiveCallBack) {
const projectContainer = document.getElementById("project-container");
projectContainer.innerHTML = '';
prjArray.forEach((project)=>{
    const projEl = document.createElement('div');
    projEl.innerHTML = `
    <h4 class='proj-name'>${project.name}</h4>
    <p class='proj-date>${project.date}</p>
    `    
    projEl.className = 'single-project';
    projEl.addEventListener('click', () => {
    setActiveCallBack(project);
});
    projectContainer.appendChild(projEl);
});
}



export function itemLoad(items) {
    const itemContainer = document.getElementById('items-container');
    itemContainer.innerHTML = '';
    
    items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'single-item';
        itemEl.innerHTML = `
            <strong>${item.name}</strong>
            <small>${item.desc}</small>
            <small>Due: ${item.date}</small>
        `;
        itemContainer.appendChild(itemEl);
    });
}
