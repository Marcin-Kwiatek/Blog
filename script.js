let postButton = document.getElementById("addPostButton")

postButton.addEventListener("click", function () { addPost() })


function addPost() {
    let post = document.getElementById("post")
    post.insertAdjacentHTML('beforeend',
        `<div class="postBlog" id="addPost">
            <textarea class="addTitle" placeholder="Wpisz tytuł postu"></textarea>
            <textarea class="addContent" placeholder="Wpisz treść postu"></textarea>
            <button class="publish" id="publish">Opublikuj</button>
        </div>`)
    let addPostButton = document.getElementById("addPostButton")
    addPostButton.remove()
    let publish = document.getElementById("publish")
    publish.addEventListener("click", function () { publishPost() })
}
function publishPost() {
    let addPost = document.getElementById("addPost")
    addPost.remove() 
    let newTitle = document.createElement("div")
    newTitle.innerHTML = "<h1>Hi there and greetings!</h1>";
}