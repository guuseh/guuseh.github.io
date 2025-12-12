let projectsData = [];
let alltags = [];

window.onload = () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // filter for category
            projectsData = data;

            // make a list of all possible tags
            data.forEach((p) => {
                p.tags.forEach((t) => {
                    alltags.push(t)
                })
            })

            //check if filtered by tag
            for(let i=0; i < alltags.length; i++){
                if(alltags[i] !== ""){
                    let tag = alltags[i].replace(/\s/g, '');
                    if(window.location.search == `?${tag.toLowerCase()}`){
                        filterByTag(alltags[i])
                    }
                } 
            }

            // filter by photography or film
            if(window.location.search == "?photography"){
                filterPhoto()
            }else if(window.location.search == "?film"){
                filterFilm()
            }else if(window.location.pathname == "/index.html" || window.location.pathname == "/" || window.location.pathname == ""){
                filterAll()
            }
        })
}

function filterAll(){
    loadProjects(projectsData, "")
    history.pushState([projectsData, ""], "", "index.html");
}


function filterFilm(){
    let filteredData = projectsData.filter((project) => project.category == "film");

    // let categoryTitle = document.getElementById("categorytitle");
    // categoryTitle.innerHTML = "<p>Film Projects</p>";

    loadProjects(filteredData, "Film Projects");
    history.pushState([filteredData, "Film Projects"], "", "index.html?film");
}

function filterPhoto(){
    let filteredData = projectsData.filter((project) => project.category == "photo");

    // let categoryTitle = document.getElementById("categorytitle");
    // categoryTitle.innerHTML = "<p>Photography Projects</p>";

    loadProjects(filteredData, "Photography Projects");
    history.pushState([filteredData, "Photography Projects"], "", "index.html?photography");
}

function filterByTag(tag){
    let filteredData = projectsData.filter((p) => p.tags.includes(tag))

    // let categoryTitle = document.getElementById("categorytitle");
    // categoryTitle.innerHTML = `<p>${tag}</p>`;

    loadProjects(filteredData, tag);
    let url = tag.replace(/\s/g, '');
    history.pushState([filteredData, tag], "", `index.html?${url.toLowerCase()}`);
}

function loadProjects(data, title){
    let categoryTitle = document.getElementById("categorytitle");
    categoryTitle.innerHTML = `<p>${title}</p>`;

    const projectsGallery = document.getElementById("projectsgallery");
    let gallery = '';

    data.forEach((project) => {
        let innerhtml = `
            <div class="gallery-item">
                <a href="/project.html?${project.url}">
                    <div class="gallery-image">
                        <img style="height: 100%" src=${project.folder + project.cover} />
                    </div>
                </a>
                <div class="gallery-item-title">
                    <p>${project.title}</p>
                </div>
            </div>
        `
        gallery = gallery + innerhtml
    })
    
    projectsGallery.innerHTML = gallery
}

window.addEventListener("popstate", (event) => {
    if(event.state){
        loadProjects(event.state[0], event.state[1])
    }
})