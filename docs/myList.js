window.onload = setup
document.querySelectorAll(".genre").forEach(e => e.onclick = filterByGenre)


async function setup() {
    let shows = await getMyShows()
    renderMyListPage(shows)
}

function renderMyListPage(shows) {
    let container = document.getElementById("allShows")
    container.innerHTML = ""
    for (let show of shows) {
        container.appendChild(createShow(show, false, true, true))
    }
}

async function filterByGenre(e) {
    let genre = e.target.innerText
    let shows = await getMyShows()
    let filteredShows = shows.filter(s => s.genres.includes(genre))
    if (filteredShows.length > 0) {
        renderMyListPage(filteredShows)
    } else {
        console.log("no shows found for this genre")
    }
}