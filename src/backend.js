let backendUrl = "https://web-backendbilal.herokuapp.com/"

async function getMyShows() {
    let response = await fetch(`${backendUrl}/shows`)
    let result = await response.json()
    return result
}

async function getMyShow(id) {
    let response = await fetch(`${backendUrl}/shows/${id}`)
    let result = await response.json()
    return result
}

async function addShow(show) {
    let response = await fetch(`${backendUrl}/shows/add`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(show)
    })
    let result = await response.json()
    return result
}

async function updateShow(show, id) {
    let response = await fetch(`${backendUrl}/shows/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(show)
    })
    let result = await response.json()
    return result
}

async function deleteShow(id) {
    let response = await fetch(`${backendUrl}/shows/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': "application/json"
        }
    })
    let result = await response.json()
    return result
}