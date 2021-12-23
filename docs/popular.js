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
        let show = createShow(shows[i], true, false, false)
        showsContainer.appendChild(show)
    }
}