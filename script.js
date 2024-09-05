const books = [
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness", 
        author: "Jonathan Haidt", 
        price: 29.99, 
        image: "./assets/book2.jpg"
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
    { 
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health", 
        author: "Calley Means", 
        price: 19.99, 
        image: "./assets/book1.jpg" 
    },
];

let cart = [];

function renderBooks() {
    const catalog = document.getElementById('book-catalog');
    catalog.innerHTML = '';
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-item';
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button onclick="addToCart('${book.title}')">Add to Cart</button>
        `;
        catalog.appendChild(bookElement);
    });
}

function addToCart(title) {
    const book = books.find(b => b.title === title);
    if (book) {
        cart.push(book);
        updateCartUI();
    }
}

function updateCartUI() {
    const cartButton = document.getElementById('cart-button');
    cartButton.textContent = `Cart (${cart.length})`;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.title} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
    });
}

document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
});

document.querySelector('.modal .close').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

document.getElementById('checkout').addEventListener('click', () => {
    // Hide the cart modal
    document.getElementById('cart-modal').style.display = 'none';

    // Redirect to the checkout page
    window.location.href = 'checkout.html';
});


document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
    displayFilteredBooks(filteredBooks);
});

function displayFilteredBooks(filteredBooks) {
    const catalog = document.getElementById('book-catalog');
    catalog.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-item';
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button onclick="addToCart('${book.title}')">Add to Cart</button>
        `;
        catalog.appendChild(bookElement);
    });
}

renderBooks();



// Functionality to handle checkout form submission

document.getElementById('checkout-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your purchase! Your order has been received.');
    // You can add more functionality here, such as sending the order to a server.
});

