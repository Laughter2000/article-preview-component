const button = document.querySelector(".article__share-icon")
const profile = document.querySelector(".article__profile")
const share = document.querySelector(".article__share")
const shareIcon = document.querySelector(".share-icon")


var desktop = window.matchMedia("(min-width: 776px)")


function showShareIcon() {
    share.classList.remove("article--visibility-toggle")

    if (desktop.matches) {

        profile.lastElementChild.lastElementChild.classList.add("article--svg-color-white")
        profile.lastElementChild.classList.remove("article--bg-color-light-grayish-blue")
        profile.lastElementChild.classList.add("article--bg-color-desaturated-dark-blue")
        
        button.removeEventListener("click", showShareIcon)
        button.addEventListener("click", removeShareIcon)

    }
    else {
        profile.classList.add("article--visibility-toggle")

    }


}

function removeShareIcon() {
    share.classList.add("article--visibility-toggle")

    if (desktop.matches) {

        profile.lastElementChild.classList.remove("article--bg-color-desaturated-dark-blue")
        profile.lastElementChild.classList.add("article--bg-color-light-grayish-blue")
        profile.lastElementChild.lastElementChild.classList.remove("article--svg-color-white")

        button.addEventListener("click", showShareIcon)


    }
    else {
        profile.classList.remove("article--visibility-toggle")
    }


}


button.addEventListener("click", showShareIcon)
shareIcon.addEventListener("click", removeShareIcon)