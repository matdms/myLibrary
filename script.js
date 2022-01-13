
let myLibrary = []

// Constructeur de Book
function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

// Méthode d'affichage d'un livre (sortie du constructeur)
Book.prototype.display = function() {
  const libDiv = document.getElementById('theLibrary')
  const bookDiv = document.createElement('div')
  bookDiv.className = "bookDiv"  
  const bookTitle = document.createElement('div')
  bookTitle.className = "bookTitle"
  const bookAuthor = document.createElement('div')
  bookAuthor.className = "bookAuthor"
  const bookRead = document.createElement('div')
  bookRead.className = "bookRead"

  bookTitle.textContent = this.title
  bookAuthor.textContent = this.author
  bookRead.textContent = (this.isRead ? "lu" : "non lu")

  bookDiv.appendChild(bookTitle)
  bookDiv.appendChild(bookAuthor)
  bookDiv.appendChild(bookRead)

  libDiv.appendChild(bookDiv)
}

// Livre de test
const fakeBook = new Book("fakeBook", "Mathieu", 243, false)
fakeBook.display()
