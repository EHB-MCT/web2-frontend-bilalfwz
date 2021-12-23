function createShow(show, add, update, remove){
    console.log(show)
    let image = document.createElement("img")
    image.src = show.image.medium
    let title = document.createElement("h3")
    title.innerText = show.name
    let rating = document.createElement("p")
    rating.innerText = `${show.rating.average}/10`


    let container = document.createElement("div")
    image.classList.add("show-image")
    container.appendChild(image)
    title.classList.add("show-title")
    container.appendChild(title)
    rating.classList.add("show-rating")
    container.appendChild(rating)
    console.log(show.personal_rating)
    if (show.personal_rating != undefined){
        let rating2 = document.createElement("p")
        rating2.innerText = `My rating: ${show.personal_rating}/10`
        container.appendChild(rating2)
    }
    if (show.watched != undefined){
        let watched = document.createElement("i")
        watched.classList = "far fa-check-circle"
        container.appendChild(watched)
    }
    container.classList.add("show")
    let buttons = document.createElement("div")
    buttons.classList.add("action-buttons")
    if (add){
        let addBtn = createAddBtn(show)
        buttons.appendChild(addBtn)
    }
    if (remove){
        let removeBtn = createDeleteButton(show)
        buttons.appendChild(removeBtn)
    }
    if (update){
        let updateBtn = createUpdateButton(show)
        buttons.appendChild(updateBtn)
    }
    container.appendChild(buttons)
    return container
}

function createAddBtn(show){
    let addBtn = document.createElement("i")
    addBtn.classList = "fas fa-plus-circle"
    addBtn.onclick = async function(){
        await addShow(show)
    }
    return addBtn
}

function createDeleteButton(show){
    let removeBtn = document.createElement("i")
    removeBtn.classList = "far fa-trash-alt"
    removeBtn.onclick = async function(){
        await deleteShow(show._id)
        setup()
    }
    return removeBtn
}

function createUpdateButton(show){
    let updateButton = document.createElement("i")
    updateButton.classList = "far fa-edit"
    updateButton.onclick = async function(){
        showPopup(show, updateShow)
    }
    return updateButton 
}