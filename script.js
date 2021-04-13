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
        let idPost = Math.random()
        let addContent = document.getElementById("addContent").value
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        if (addTitle !== "" && addContent !== "") {
            fetch('http://localhost:5000/article', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: idPost, title: addTitle, content: addContent, date: today })
                })
                .then(function() { window.location.href = "article.html?nr=" + idPost })
        }

    }