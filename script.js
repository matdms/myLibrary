
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

  const toggle = document.createElement('input')
  toggle.className = "bookButton"
  toggle.type = 'button'
  toggle.value = "Toggle read"
  toggle.onclick = (e) => {
    this.toogleRead()
    updateLibrary()
  }

  const remove = document.createElement('input')
  remove.className = "bookButton"
  remove.type = 'button'
  remove.value = "Remove book"
  remove.onclick = (e) => {
    this.remove()
    updateLibrary()
  }

  bookTitle.textContent = this.title
  bookAuthor.textContent = this.author
  bookRead.textContent = (this.isRead ? "lu" : "non lu")

  bookDiv.appendChild(bookTitle)
  bookDiv.appendChild(bookAuthor)
  bookDiv.appendChild(bookRead)
  bookDiv.appendChild(toggle)
  bookDiv.appendChild(remove)

  libDiv.appendChild(bookDiv)
}

// Ajout d'un livre à l'Array myLibrary
Book.prototype.add = function() {
  myLibrary.push(this)
}

// Suppression d'un livre
Book.prototype.remove = function() {
  console.log('livre supprimé')
  for( let i = 0; i < myLibrary.length; i++){ 
    if ( myLibrary[i]['title'] === this.title && myLibrary[i]['author'] === this.author ) { 
        myLibrary.splice(i, 1); 
    }
  }
  updateLibrary()
}

// Bascule lu / non lu sur un livre
Book.prototype.toogleRead = function() {
  this.isRead = (this.isRead ? false : true)
}

function validateForm() {
  event.preventDefault()
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isReadVal = document.querySelector('input[name="lu"]:checked').value
  const isRead = (isReadVal == 1 ? true : false)
  const newBook = new Book(title, author, isRead)
  newBook.add()
  // console.log(myLibrary)
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
  console.log(myLibrary)
}

updateLibrary()