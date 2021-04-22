  window.addEventListener('DOMContentLoaded', (event) => {
      fetch('http://localhost:5000/allArticles?pageNumber=1')
          .then(function(response) { return response.json() })
          .then(function(data) {
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
      let pageNumbers = document.getElementsByClassName("pageNumber")
      for (let j = 0; j < pageNumbers.length; j++) {
          pageNumbers[j].addEventListener("click", function() { pageNumberClick(j) })
      }

      function pageNumberClick(j) {
          fetch('http://localhost:5000/allArticles?pageNumber=' + (j + 1))
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
  })