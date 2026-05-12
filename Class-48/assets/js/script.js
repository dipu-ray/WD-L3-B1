// ===== DATE & TIME =====
function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

    document.getElementById('footerDate').textContent = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('footerTime').textContent = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById('currentYear').textContent = now.getFullYear();
}
updateDateTime();
setInterval(updateDateTime, 1000);

// ===== SCROLL TO TOP =====
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// ===== GALLERY FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ===== LIGHTBOX =====
const lightboxModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
function openLightbox(element) {
    const img = element.querySelector('img');
    const captionTitle = element.querySelector('.gallery-overlay h5')?.textContent || '';
    const captionDate = element.querySelector('.gallery-overlay span')?.textContent || '';

    document.getElementById('lightboxImage').src = img.src;
    document.getElementById('lightboxCaption').innerHTML = `<strong>${captionTitle}</strong><br><small>${captionDate}</small>`;
    lightboxModal.show();
}

// ===== FORM VALIDATION =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const inputs = this.querySelectorAll('.form-control');
    inputs.forEach(input => input.classList.remove('is-invalid', 'is-valid'));

    // Full Name
    const fullName = document.getElementById('fullName');
    if (!fullName.value.trim() || fullName.value.trim().length < 2) {
        fullName.classList.add('is-invalid');
        isValid = false;
    } else {
        fullName.classList.add('is-valid');
    }

    // Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.add('is-valid');
    }

    // Phone (optional)
    const phone = document.getElementById('phone');
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
    if (phone.value.trim() && !phoneRegex.test(phone.value.trim())) {
        phone.classList.add('is-invalid');
        isValid = false;
    } else if (phone.value.trim()) {
        phone.classList.add('is-valid');
    }

    // Inquiry Type
    const inquiryType = document.getElementById('inquiryType');
    if (!inquiryType.value) {
        inquiryType.classList.add('is-invalid');
        isValid = false;
    } else {
        inquiryType.classList.add('is-valid');
    }

    // Message
    const message = document.getElementById('message');
    if (!message.value.trim() || message.value.trim().length < 20) {
        message.classList.add('is-invalid');
        isValid = false;
    } else {
        message.classList.add('is-valid');
    }

    if (isValid) {
        const alert = document.getElementById('successAlert');
        alert.style.display = 'block';
        setTimeout(() => {
            this.reset();
            inputs.forEach(input => input.classList.remove('is-valid', 'is-invalid'));
            alert.style.display = 'none';
        }, 5000);
    }
});

// Clear invalid state on input
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        if (this.classList.contains('is-invalid')) {
            this.classList.remove('is-invalid');
        }
    });
});