const baseUrl = "https://api.tvmaze.com/"
document.querySelectorAll(".genre").forEach(e => e.onclick = filterByGenre)
window.onload = setup

async function setup() {
    let shows = await getShows()
    let sortedShows = sortShows(shows)
    let count = 25
    renderPopularPage(count, sortedShows)
}

async function filterByGenre(e) {
    let genre = e.target.innerText
    let shows = await getShows()
    shows = shows.filter(s => s.genres.includes(genre))
    let sortedShows = sortShows(shows)
    let count = 25
    renderPopularPage(count, sortedShows)
}

function sortShows(shows) {
    let sortedShows = shows.sort((a, b) => (b.rating.average - a.rating.average))
    return sortedShows
}

async function getShows() {
    let response = await fetch(`${baseUrl}shows`)
    let result = await response.json()
    return result
}

function renderPopularPage(count, shows) {
    let showsContainer = document.getElementById("popularShows")
    showsContainer.innerHTML = ""
    for (let i = 0; i < count; i++) {
        let show = createShow(shows[i])
        showsContainer.appendChild(show)
    }
}

function addToMyList(show) {
    //TODO
}

function createShow(show) {
    console.log(show)
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