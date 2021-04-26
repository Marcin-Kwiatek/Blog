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
                      divTitle.setAttribute("id", "title-" + data.data[i].id)
                      let editButton = document.createElement("button")
                      editButton.innerHTML = "EDYTUJ"
                      editButton.setAttribute("id", "edit-" + data.data[i].id)
                      let deleteButton = document.createElement("button")
                      deleteButton.innerHTML = "USUŃ"
                      deleteButton.setAttribute("id", "delete-" + data.data[i].id)
                      let divContent = document.createElement("div")
                      divContent.innerHTML = data.data[i].content
                      divContent.classList.add("divContent")
                      divContent.setAttribute("id", "content-" + data.data[i].id)
                      document.getElementById("title").appendChild(divTitle)
                      document.getElementById("title").appendChild(editButton)
                      document.getElementById("title").appendChild(deleteButton)
                      document.getElementById("title").appendChild(divContent)
                      editButton.addEventListener("click", function() {
                          editArticle(data.data[i].id)
                      })
                      deleteButton.addEventListener("click", function() {
                          deleteArticle(data.data[i].id)
                      })
                  }
              })
      }
      showArticles(1)

      function editArticle(id) {
          let titleArticle = document.getElementById("title-" + id)
          titleArticle.remove()
          let contentArticle = document.getElementById("content-" + id)
          contentArticle.remove()
          let editedArticle = document.createElement("textarea")
          editedArticle.classList.add("addTitle")
          document.getElementById("edit-" + id).appendChild(editedArticle)
          let editArticleButton = document.getElementById("edit-" + id)
          editArticleButton.innerHTML = "Zatwierdź zmiany"
      }

      function deleteArticle(id) {
          fetch('http://localhost:5000/deleteArticle?id=' + id, {
                  method: 'DELETE',
              })
              .then(function(response) { return response.json() })
              .then(function(data) {
                  let titleArticle = document.getElementById("title-" + id)
                  titleArticle.remove()
                  let contentArticle = document.getElementById("content-" + id)
                  contentArticle.remove()
                  let editArticleButton = document.getElementById("edit-" + id)
                  editArticleButton.remove()
                  let deleteArticleButton = document.getElementById("delete-" + id)
                  deleteArticleButton.remove()
              })
      }

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