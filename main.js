const projectCardList = document.querySelector(".card-list");


let projectDetail = [];

const showCard = () => {

    projectDetail.forEach(project => {

    const projectCard  = document.createElement("div");
    projectCard.classList.add('project-card')

    projectCard.innerHTML = `
    
    <img src="${project.image}" alt="">
        <div>
          <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">View</a>
        </div>
        `

    projectCardList.appendChild(projectCard)

    });

}

const initApp = () => {
    fetch('projects.json').then
    (Response => Response.json()).then
    (data => {
        projectDetail = data;
        showCard()
    })
}

initApp();




