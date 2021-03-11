window.addEventListener('DOMContentLoaded', (event) => {
    for (let i = 0; i < localStorage.length; i++) {
        let div = document.createElement("div")
        let key = localStorage.key(i)
        div.innerHTML = localStorage.getItem(localStorage.key(i))
        if (key.startsWith("title")) {
            div.style.width = "100%"
            div.style.minHeight = "50px"
            div.style.fontSize = "36px"
            div.style.textAlign = "center"
            div.style.color = "white"
            div.style.fontWeight = "bold"
            div.style.marginBottom = "20px"
            div.style.marginRight = "auto"
            
        }
        else{
            div.style.width = "100%"
            div.style.background = "lightgray"
            div.style.color = "black"
            div.style.padding = "10px"
            div.style.fontSize = "22px"
            div.style.marginBottom = "20px"
            div.style.textAlign = "justify"
        }
        document.getElementById("title").appendChild(div)
    }
})