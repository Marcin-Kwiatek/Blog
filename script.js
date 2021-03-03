let postButton = document.getElementById("addPostButton")

postButton.addEventListener("click", function () { addPost() })


function addPost() {
    let post = document.getElementById("post")
    post.insertAdjacentHTML('beforeend',
        `<div class="postBlog" id="addPost">
            <textarea class="addTitle" placeholder="Wpisz tytuł postu"></textarea>
            <textarea class="addContent" placeholder="Wpisz treść postu"></textarea>
            <button class="publish">Opublikuj</button>
        </div>`)
        let addPostButton = document.getElementById("addPostButton")
        addPostButton.remove()
    let postBlog = document.getElementById("postBlog")
    let addTitle = document.getElementById("addTitle")
    let addContent = document.getElementById("addContent")
    
}
