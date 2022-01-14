
// Array de stockage des livres
  let myLibrary = []

// Constructeur de Book
function Book(title, author, isRead) {
  this.title = title
  this.author = author
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

// Ajout d'un livre à l'Array myLibrary
Book.prototype.add = function() {
  myLibrary.push(this)
}

function validateForm() {
  event.preventDefault()
  const titleField = document.getElementById('title')
  const title = titleField.value
  const authorField = document.getElementById('author')
  const author = authorField.value
  const isRead = true // A CORRIGER
  const newBook = new Book(title, author, isRead)
  newBook.add()
  console.log(myLibrary)
  updateLibrary()
}

// Livre de test

const anotherBook = new Book("Lord of the Ring", "JRR Tolkien", false)
anotherBook.add()
const thirdBook = new Book("Les Piliers de la Terre", "Ken Follett", true)
thirdBook.add()

// Affichage des livres de la library
function updateLibrary() {
  const libDiv = document.getElementById('theLibrary')
  libDiv.innerHTML = ""
  myLibrary.forEach(function(book) {
    book.display()
  })
}

updateLibrary()