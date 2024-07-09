// JavaScript for dynamic sliding image gallery

// Array of products (images)
const products = [
    "/src/assets/images/generators/generator1.jpg",
    "/src/assets/images/generators/generator2.jpg",
    "/src/assets/images/generators/generator3.jpg",
    "/src/assets/images/generators/generator4.jpg",
    "/src/assets/images/generators/generator5.jpg",
    "/src/assets/images/generators/generator6.jpg",
    "/src/assets/images/generators/generator7.jpg",
    "/src/assets/images/generators/generator8.jpg",
    "/src/assets/images/generators/generator9.jpg"
    // Add more images as needed
];

const gallery = document.getElementById('gallery');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideWidth = gallery.clientWidth;

// Function to initialize gallery with products
function initializeGallery() {
    gallery.innerHTML = ''; // Clear existing content
    
    products.forEach((product, index) => {
        const img = document.createElement('img');
        img.src = product;
        img.alt = `Image ${index + 1}`;
        gallery.appendChild(img);
    });
}

// Initialize gallery
initializeGallery();

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex <= 0) ? products.length - 1 : currentIndex - 1;
    scrollToImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex >= products.length - 1) ? 0 : currentIndex + 1;
    scrollToImage(currentIndex);
});

// Function to scroll to the current index
function scrollToImage(index) {
    gallery.style.transform = `translateX(-${index * slideWidth}px)`;
}
