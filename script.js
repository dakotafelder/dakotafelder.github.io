const books = [
    {
        title: "Fight Night",
        author: "Miriam Toews",
        description: "Description for book 1.",
        coverImage: "./Assets/book_covers/fightNight.jpg"
    },
    {
        title: "The Bomber Mafia",
        author: "Malcolm Gladwell",
        description: "Description for book 2.",
        coverImage: "./Assets/book_covers/bomberMafia.jpg"
    },
    {
        title: "Consider the Lobster",
        author: "David Foster Wallace",
        description: "This guy is a total dweeb, but makes some good points about animals and if its bad to boil them while alive. 4 stars.",
        coverImage: "./Assets/book_covers/considerTheLobster.jpg"
    },
    {
        title: "How to Hide an Empire",
        author: "Daniel Immerwahr",
        description: "Description for book 4.",
        coverImage: "./Assets/book_covers/howToHideAnEmpire.jpg"
    },
    {
        title: "Pawn of Prophecy",
        author: "David Eddings",
        description: "Description for book 5.",
        coverImage: "./Assets/book_covers/pawnOfProphecy.jpg"
    },
    {
        title: "A Promised Land",
        author: "Barack Obama",
        description: "Description for book 6.",
        coverImage: "./Assets/book_covers/promisedLand.jpg"
    },
    {
        title: "The Remains of the Day",
        author: "Kazuo Ishiguro",
        description: "Description for book 7.",
        coverImage: "./Assets/book_covers/remainsOfTheDay.jpg"
    },
    {
        title: "A History of the World in 6 Glasses",
        author: "Tom Standage",
        description: "Description for book 8.",
        coverImage: "./Assets/book_covers/sixGlasses.jpg"
    },
    {
        title: "Theodore Roosevelt an American Force",
        author: "Jeff Webb",
        description: "Description for book 9.",
        coverImage: "./Assets/book_covers/theodoreRoosevelt.jpg"
    }
];


const bookContainer = document.getElementById('book-container');

// Create a function to render books
function renderBooks() {
    books.forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';

        bookElement.innerHTML = `
            <img class="book-cover" src="${book.coverImage}" alt="${book.title}">            
            <div class="book-info">
            <div>
                <img class="book-cover" src="${book.coverImage}" alt="${book.title}">    
            </div>
            <div>        
                <h2 class="book-title">${book.title}</h2>
                <h3 class="book-author">${book.author}</h3>
                <p class="book-description">${book.description}</p>
            </div>
                <button class="close-info">Close</button>
            </div>
        `;

        // Add event listener for click on the book cover
        const bookCover = bookElement.querySelector('.book-cover');
        const bookInfo = bookElement.querySelector('.book-info');
        const closeInfo = bookElement.querySelector('.close-info');

        bookCover.addEventListener('click', () => {
            bookInfo.classList.toggle('active');
        });

        closeInfo.addEventListener('click', () => {
            bookInfo.classList.remove('active');
        });

        bookContainer.appendChild(bookElement);
    });
}

// Call the function to render books
renderBooks();