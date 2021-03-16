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
          divTitle.classList.add("divTitle")
          let divContent = document.createElement("div")
          divContent.innerHTML = localStorage.getItem("content" + titleArr[j])
          divContent.classList.add("divContent")
          document.getElementById("title").appendChild(divTitle)
          document.getElementById("title").appendChild(divContent)
      }
  })