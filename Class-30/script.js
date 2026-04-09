// Select elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

// Create overlay element
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// Toggle mobile menu
function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "auto";
}

// Close menu
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Event listeners
hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// Close menu when CTA button is clicked
document
    .querySelector(".nav-cta-mobile .cta-button")
    .addEventListener("click", closeMenu);

// Close menu on window resize (if resized to desktop)
window.addEventListener("resize", () => {
    if (window.innerWidth > 868) {
        closeMenu();
    }
});

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
});