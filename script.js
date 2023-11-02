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
        bookEl.setAttribute("class", "bookCard");
        bookEl.innerHTML = `
            <div class="cardHeader">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="cardBody">
                <p>${book.pages} pages</p>
                <p class="readStatus">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="removeBtn" onclick="removeBook(${i})">Remove</buttom>
                </div>
        `;
        library.appendChild(bookEl);
    }
}

function removeBook (i){
    myLibrary.splice(i, 1)
    render();
}


newBookBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#newBookForm");
    newBookForm.style.display = "block";
})

document.querySelector("#newBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
})


