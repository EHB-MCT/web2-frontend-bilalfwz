const baseUrl = "https://api.tvmaze.com/"
document.querySelectorAll(".genre").forEach(e => e.onclick = filterByGenre)
window.onload = setup

async function setup() {
    let shows = await getShows()
    console.log(shows)
    renderHomePage(shows[0])
}

async function filterByGenre(e) {
    let genre = e.target.innerText
    let shows = await getShows()
    let filteredShows = shows.filter(s => s.genres.includes(genre))
    if (filteredShows.length > 0) {
        let showId = Math.floor(Math.random() * filteredShows.length)
        renderHomePage(filteredShows[showId])
    } else {
        console.log("no shows found for this genre")
    }
}

async function getShows() {
    let response = await fetch(`${baseUrl}shows`)
    let result = await response.json()
    return result
}

function renderHomePage(show) {
    let poster = document.getElementById("poster")
    poster.src = show.image.original
    setShowInfo(show)
}

function setShowInfo(show) {
    let title = document.getElementById("title")
    let rating = document.getElementById("rating")
    let description = document.getElementById("description")


    title.innerText = show.name
    rating.innerText = `${show.rating.average}/10`
    description.innerHTML = show.summary

}

console.log('this is');