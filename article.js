window.addEventListener('DOMContentLoaded', (event) => {
    let nr = new URLSearchParams(window.location.search)
    console.log(nr.get('nr'))
    let title = document.getElementById("title")
    title.innerHTML = localStorage.getItem('title'+nr.get('nr'))
    let text = document.getElementById("text")
    text.innerHTML = localStorage.getItem('content'+nr.get('nr'))
})