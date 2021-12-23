document.getElementById("popup-close").onclick = hidePopup

function showPopup(show,saveCallback){
    document.getElementById("popup").style.display = "inline-block"
    let container = document.createElement("div")
    let info = document.createElement("div")

    let image = document.createElement("img")
    image.src = show.image.medium
    let title = document.createElement("p")
    title.innerText = show.name 
    let rating = document.createElement("p")
    rating.innerText = `${show.rating.average}/10`
    info.appendChild(image)
    info.appendChild(title)
    info.appendChild(rating)
    if (show.personal_rating != undefined){
        let rating2 = document.createElement("p")
        rating2.innerText = `My rating: ${show.personal_rating}/10`
        info.appendChild(rating2)
    }
    if (show.watched != undefined){
        let watched = document.createElement("i")
        watched.classList = "fas fa-checked"
        info.appendChild(watched)
    }


    let inputDiv = document.createElement("div")
    let ratingInputDiv = document.createElement("div")
    let saveInfo = document.createElement("div")
    let checkboxLabel = document.createElement("label")
    checkboxLabel.innerText = "Watched ?"
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    let personalRatingLabel = document.createElement("label")
    personalRatingLabel.innerText = "Personal rating (on 10)"
    let personalRating = document.createElement("input")
    personalRating.type = "number"

    inputDiv.appendChild(checkboxLabel)
    inputDiv.appendChild(checkbox)

    ratingInputDiv.appendChild(personalRatingLabel)
    ratingInputDiv.appendChild(personalRating)

    let saveButton = document.createElement("button")
    saveButton.innerText = "Save"
    saveButton.onclick = async function(){
        let watched = checkbox.checked
        let rating = parseInt(personalRating.value)
        if (rating == undefined || isNaN(rating) || rating < 0){
            rating = 0
        }
        else if (rating > 10){
            rating = 10
        }
        show.watched = watched
        show.personal_rating = rating
        await saveCallback(show, show._id)
        hidePopup()
        setup()
    }

    saveInfo.appendChild(inputDiv)
    saveInfo.appendChild(ratingInputDiv)
    saveInfo.appendChild(saveButton)

    container.appendChild(info)
    container.appendChild(saveInfo)

    container.classList.add("show-info")
    saveInfo.classList.add("save-info")
    document.getElementById("popup-body").innerHTML = ""
    document.getElementById("popup-body").appendChild(container)
}

function hidePopup(){
    document.getElementById("popup").style.display = "none"
}