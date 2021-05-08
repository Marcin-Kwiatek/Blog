window.addEventListener('DOMContentLoaded', (event) => {

    let searchParams = new URLSearchParams(window.location.search)
    fetch('http://localhost:5000/article?id=' + searchParams.get('nr'), {})
        .then(function(response) { return response.json() })
        .then(function(data) {
            let divTitle = document.createElement("div")
            divTitle.innerHTML = data.data.title
            divTitle.classList.add("divTitle")
            let divContent = document.createElement("div")
            divContent.innerHTML = data.data.content
            divContent.classList.add("divContent")
            document.getElementById("title").appendChild(divTitle)
            document.getElementById("title").appendChild(divContent)
        })
})