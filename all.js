const baseUrl = "https://api.tvmaze.com/"
document.querySelectorAll(".genre").forEach(e => e.onclick = filterByGenre)
window.onload = setup
document.getElementById("searchBtn").onclick = search

async function setup() {
    let shows = await getShows()
    let count = Math.min(shows.length, 25)
    renderPopularPage(count, shows)
}

async function filterByGenre(e) {
    let genre = e.target.innerText
    console.log(genre)
    let shows = await getShows()
    shows = shows.filter(s => s.genres.includes(genre))
    let count = Math.min(shows.length, 25)
    renderPopularPage(count, shows)
}

async function getShows() {
    let response = await fetch(`${baseUrl}shows`)
    let result = await response.json()
    return result
}

async function searchShows(query) {
    let response = await fetch(`${baseUrl}/search/shows?q=${query}`)
    let result = await response.json()
    return result
}

async function search(e) {
    let input = document.getElementById("searchInput").value
    if (input != "") {
        let shows = await searchShows(input)
        shows = shows.map(s => s.show)
        console.log(shows)
        renderPopularPage(25, shows)
    }
}

function renderPopularPage(count, shows) {
    let showsContainer = document.getElementById("allShows")
    showsContainer.innerHTML = ""
    for (let i = 0; i < count; i++) {
        let show = createShow(shows[i])
        showsContainer.appendChild(show)
    }
}



function createShow(show) {
    if (show == undefined) return
    let image = document.createElement("img")
    image.src = show.image.medium
    let title = document.createElement("h3")
    title.innerText = show.name
    let rating = document.createElement("p")
    rating.innerText = `${show.rating.average}/10`
    let addBtn = document.createElement("i")
    addBtn.classList = "fas fa-plus-circle"
    addBtn.onclick = function () {
        addToMyList(show)
    }


    let container = document.createElement("div")
    image.classList.add("show-image")
    container.appendChild(image)
    title.classList.add("show-title")
    container.appendChild(title)
    rating.classList.add("show-rating")
    container.appendChild(rating)
    container.classList.add("show")
    container.appendChild(addBtn)
    return container
}