window.addEventListener('DOMContentLoaded', (event) => {
    fetch('http://localhost:5000/article', {
        method: 'POST'
    })


    let postButton = document.getElementById("addPostButton")

    postButton.addEventListener("click", function() { addPost() })


    function addPost() {
        let post = document.getElementById("post")
        post.insertAdjacentHTML('beforeend',
            `<div class="postBlog" id="addPost">
            <textarea class="addTitle" id="addTitle" placeholder="Wpisz tytuł postu"></textarea>
            <textarea class="addContent" id="addContent" placeholder="Wpisz treść postu"></textarea>
            <button class="publish" id="publish"> Opublikuj</button>
        </div>`)

        let addPostButton = document.getElementById("addPostButton")
        addPostButton.remove()
        let publish = document.getElementById("publish")
        publish.addEventListener("click", function() { publishPost() })
    }

    function publishPost() {
        let addTitle = document.getElementById("addTitle").value
        let id = Math.random()
        let addContent = document.getElementById("addContent").value

        if (addTitle !== "" && addContent !== "") {
            fetch('http://localhost:5000/article', {
                    method: 'POST'
                })
                .then(function() { window.location.href = "article.html?nr=" + id })
        }

    }
})