const cards = document.querySelectorAll(".card");
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.style.transition = "transform 0.5s ease, opacity 0.5s";
        if (index === currentIndex) {
            card.style.transform = "scale(1.1)";
            card.style.zIndex = "3";
            card.style.opacity = "1";
        } else if (index === (currentIndex + 1) % cards.length) {
            card.style.transform = "translateX(120px) rotateY(10deg)";
            card.style.zIndex = "2";
            card.style.opacity = "0.8";
        } else {
            card.style.transform = "translateX(-120px) rotateY(-10deg)";
            card.style.zIndex = "2";
            card.style.opacity = "0.8";
        }
    });
}

function rotateCarousel(direction) {
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    updateCarousel();
}

// Initialize carousel positions
updateCarousel();

document.querySelector(".carousel-prev").addEventListener("click", () => rotateCarousel(-1));
document.querySelector(".carousel-next").addEventListener("click", () => rotateCarousel(1));