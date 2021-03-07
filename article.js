window.addEventListener('DOMContentLoaded', (event) => {
    let topic = new URLSearchParams(window.location.search)
    console.log(topic.get('topic'))
    let title = document.getElementById("title")
    title.innerHTML = "Tytuł"
    let text = document.getElementById("text")
    text.innerHTML = "Dieta ketogeniczna to sposób odżywiania, który zakłada zwiększenie podaży tłuszczów przy jednoczesnym ograniczeniu spożywania węglowodanów. Aby jednak była skuteczna i nie stanowiła zagrożenia dla organizmu, powinna być przeprowadzana wyłącznie pod kontrolą lekarza i dietetyka."
})