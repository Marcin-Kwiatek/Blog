  window.addEventListener('DOMContentLoaded', (event) => {
      fetch('http://localhost:5000/allArticles')
          .then(function(response) { return response.json() })
          .then(function(data) {
              console.log(data.data.length)
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
  })