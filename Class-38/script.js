// Animation in counter
function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals) || 0;
    const duration = 2000;
    const start = performance.now();

    // Update the values
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = ease * target;
        el.textContent = current
            .toFixed(decimals)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// Animation in Progress Bar
function animateProgress(el) {
    const target = el.dataset.progress;
    setTimeout(() => {
        el.style.width = target + "%";
    }, 300);
}

// Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const card = entry.target;

            // Animate counter
            const counter = card.querySelector(".counter");
            if (counter) animateCounter(counter);

            // Animate progress bar
            const progress = card.querySelector(".progress-fill");
            if (progress) animateProgress(progress);

            // Stop observing after animation
            observer.unobserve(card);
        });
    },
    { threshold: 0.3 },
);

// Observe all cards
document.querySelectorAll(".card").forEach((card) => observer.observe(card));