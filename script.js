const books = [
    {
        title: "Fight Night",
        author: "Miriam Toews",
        description: "Three generations living under the same roof: grandmother, mother and daughter. A sad, heartwarming, and hilarious story about family and how they both love and embarrass us.",
        coverImage: "./Assets/book_covers/fightNight.jpg"
    },
    {
        title: "The Bomber Mafia",
        author: "Malcolm Gladwell",
        description: "If you’ve listened to any Malcom Gladwell, you know exactly what to expect. Set against the backdrop of WWII and the emerging technology of precision bombing.",
        coverImage: "./Assets/book_covers/bomberMafia.jpg"
    },
    {
        title: "Consider the Lobster",
        author: "David Foster Wallace",
        description: "A collection by a literary snob, both insufferable and insightful. How would you choose to kill a lobster?",
        coverImage: "./Assets/book_covers/considerTheLobster.jpg"
    },
    {
        title: "How to Hide an Empire",
        author: "Daniel Immerwahr",
        description: "One of the only books I’ve ever read twice. Probably because there’s so many ways to hid an Empire. The past of the USA as not presented in history class.",
        coverImage: "./Assets/book_covers/howToHideAnEmpire.jpg"
    },
    {
        title: "Pawn of Prophecy",
        author: "David Eddings",
        description: "A wonderfully cliche-riddled fantasy novel. Book one of the Belgariad and a novel that will always have a spot close to my heart. Magic, knights, thieves, companions, quests, and destiny.",
        coverImage: "./Assets/book_covers/pawnOfProphecy.jpg"
    },
    {
        title: "A Promised Land",
        author: "Barack Obama",
        description: "29 hours of Obama narrating his memoir. Enough said.",
        coverImage: "./Assets/book_covers/promisedLand.jpg"
    },
    {
        title: "The Remains of the Day",
        author: "Kazuo Ishiguro",
        description: "One of Kazuo Ishiguro’s most famous works. A butler reflects on a life of service. What does it mean to do good work? What does it mean to live a good life? Still need to watch the movie…",
        coverImage: "./Assets/book_covers/remainsOfTheDay.jpg"
    },
    {
        title: "A History of the World in 6 Glasses",
        author: "Tom Standage",
        description: "A fun read about the broad topic of human history, through the slightly smaller lens of beverage. Beer, coffee, coca cola and the other’s that evolve alongside all of us.",
        coverImage: "./Assets/book_covers/sixGlasses.jpg"
    },
    {
        title: "Theodore Roosevelt an American Force",
        author: "Jeff Webb",
        description: "My favorite president. The frontier, national parks, the Amazon, battles, bullets, bears, and pushing the boundaries of what the president can do.",
        coverImage: "./Assets/book_covers/theodoreRoosevelt.jpg"
    }
];


const bookContainer = document.getElementById('book-container');
const shelfOverlay = document.querySelector('.shelfOverlay');
const overlayCover = shelfOverlay.querySelector('.book-overlay-cover');
const overlayTitle = shelfOverlay.querySelector('.book-title');
const overlayAuthor = shelfOverlay.querySelector('.book-author');
const overlayDescription = shelfOverlay.querySelector('.book-description');
const closeInfoButton = shelfOverlay.querySelector('.close-info');

// Create a function to render books
function renderBooks() {
    books.forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';

        bookElement.innerHTML = `
            <img class="book-cover" src="${book.coverImage}" alt="${book.title}">
        `;

        // Add event listener for click on the book cover
        const bookCover = bookElement.querySelector('.book-cover');

        bookCover.addEventListener('click', () => {
            // Populate the overlay with the clicked book's data
            overlayCover.src = book.coverImage;
            overlayCover.alt = book.title;
            overlayTitle.textContent = book.title;
            overlayAuthor.textContent = book.author;
            overlayDescription.textContent = book.description;

            // Show the overlay
            shelfOverlay.classList.add('active');
        });

        bookContainer.appendChild(bookElement);
    });
}

// Add event listener for the close button
closeInfoButton.addEventListener('click', () => {
    shelfOverlay.classList.remove('active');
});

// Call the function to render books
renderBooks();