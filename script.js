const myLibrary = [];
let newBookBtn = document.querySelector("#newBookBtn");


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render (){
    let library = document.querySelector("#library");
    library.innerHTML = "";
    for(let i=0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<p>${book.title}</p>`;
        library.appendChild(bookEl);
    }
}


newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";
})

document.querySelector("#newBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})


