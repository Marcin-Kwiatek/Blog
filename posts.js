  
window.addEventListener('DOMContentLoaded', (event) => {
    let titleArr = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("title")) {
            let keyNumber = key.substr(5)
            titleArr.push(keyNumber)
        }
    }
    for (let j = 0; j < titleArr.length; j++) {
        let divTitle = document.createElement("div")
        divTitle.innerHTML = localStorage.getItem("title" + titleArr[j])
        let divContent = document.createElement("div")
        divContent.innerHTML = localStorage.getItem("content" + titleArr[j])

        divTitle.style.width = "100%"
        divTitle.style.minHeight = "50px"
        divTitle.style.fontSize = "36px"
        divTitle.style.textAlign = "center"
        divTitle.style.color = "white"
        divTitle.style.fontWeight = "bold"
        divTitle.style.marginBottom = "20px"
        divTitle.style.marginRight = "auto"


        divContent.style.width = "100%"
        divContent.style.background = "lightgray"
        divContent.style.color = "black"
        divContent.style.padding = "10px"
        divContent.style.fontSize = "22px"
        divContent.style.marginBottom = "20px"
        divContent.style.textAlign = "justify"
        document.getElementById("title").appendChild(divTitle)
        document.getElementById("title").appendChild(divContent)
    }
})