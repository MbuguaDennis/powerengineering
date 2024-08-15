document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navBar = document.querySelector('.header__nav'); // Changed to '.header__nav'
    // Close menu button
    const closeMenuButton = document.getElementById("close-menu-btn");
    menuIcon.addEventListener('click', () => {
        navBar.classList.add("active");
    });
    closeMenuButton.addEventListener('click', () => {
        navBar.classList.remove("active");
    });

    // JavaScript for Go to Top Button
    const goToTopButton = document.getElementById("go-to-top");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            goToTopButton.style.display = "block";
        } else {
            goToTopButton.style.display = "none";
        }
    });
    // Smooth scroll to top
    goToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    // HERO SECTION FUNCTIONALITY
const items = [
    "electrical controls",
    "solar panels",
    "pumps",
    "motors",
    "generators"
];
let index = 0;
const changingText = document.getElementById("changing-text");
console.log(changingText)

function changeText() {
    changingText.style.opacity = 0; // Start fading out
    setTimeout(() => {
        index = (index + 1) % items.length;
        changingText.textContent = items[index];
        changingText.style.opacity = 1; // Fade back in
    }, 500); // Match the CSS transition duration
}

setInterval(changeText, 2000); // Change text every 2 seconds


    // JavaScript for FAQ Section Functionality
    const faqItems = document.querySelectorAll(".faq-item");

    // Toggle answer visibility when clicking on question
    faqItems.forEach(function (item) {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");

        question.addEventListener("click", function () {
            answer.classList.toggle("show-answer");
        });
    });

    function callSteve() {
        window.location.href = 'tel:+254758225198'; // Replace with Steve's actual phone number
    }
});



// shop html javascript code
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
    // updated images
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
