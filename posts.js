  window.addEventListener('DOMContentLoaded', (event) => {
      function showArticles(page) {
          fetch('http://localhost:5000/allArticles?pageNumber=' + page)
              .then(function(response) { return response.json() })
              .then(function(data) {
                  let title = document.getElementById("title")
                  title.innerHTML = ''
                  for (let i = 0; i < data.data.length; i++) {
                      let divTitle = document.createElement("div")
                      divTitle.innerHTML = data.data[i].title
                      divTitle.classList.add("divTitle")
                      let divContent = document.createElement("div")
                      divContent.innerHTML = data.data[i].content
                      divContent.classList.add("divContent")
                      document.getElementById("title").appendChild(divTitle)
                      document.getElementById("title").appendChild(divContent)
                  }
              })
      }
      showArticles(1)

      function getArticlesLength() {
          fetch('http://localhost:5000/articlesCount')
              .then(function(response) { return response.json() })
              .then(function(data) {
                  for (let k = 1; k <= Math.ceil(data.data / 3); k++) {
                      let divPage = document.createElement("div")
                      divPage.innerHTML = k
                      divPage.classList.add("pageNumber")
                      document.getElementById("pages").appendChild(divPage)
                      divPage.addEventListener("click", function() { showArticles(k) })
                  }
              })
      }
      getArticlesLength()
  })