// ===== DATE & TIME IN FOOTER =====
function updateDateTime() {
    const now = new Date();

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('footerDate').textContent = now.toLocaleDateString('en-US', dateOptions);

    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('footerTime').textContent = now.toLocaleTimeString('en-US', timeOptions);

    document.getElementById('currentYear').textContent = now.getFullYear();
}

updateDateTime();
setInterval(updateDateTime, 1000);

// ===== SCROLL TO TOP =====
const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== FADE IN ANIMATION ON SCROLL =====
const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// ===== FORM VALIDATION =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Reset all
    const inputs = this.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.classList.remove('is-invalid', 'is-valid');
    });

    // First Name
    const firstName = document.getElementById('firstName');
    if (!firstName.value.trim() || firstName.value.trim().length < 2) {
        firstName.classList.add('is-invalid');
        isValid = false;
    } else {
        firstName.classList.add('is-valid');
    }

    // Last Name
    const lastName = document.getElementById('lastName');
    if (!lastName.value.trim() || lastName.value.trim().length < 2) {
        lastName.classList.add('is-invalid');
        isValid = false;
    } else {
        lastName.classList.add('is-valid');
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

    // Phone (optional but validate if filled)
    const phone = document.getElementById('phone');
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (phone.value.trim() && !phoneRegex.test(phone.value.trim())) {
        phone.classList.add('is-invalid');
        isValid = false;
    } else if (phone.value.trim()) {
        phone.classList.add('is-valid');
    }

    // Topic
    const topic = document.getElementById('topic');
    if (!topic.value) {
        topic.classList.add('is-invalid');
        isValid = false;
    } else {
        topic.classList.add('is-valid');
    }

    // Message
    const message = document.getElementById('message');
    if (!message.value.trim() || message.value.trim().length < 20) {
        message.classList.add('is-invalid');
        isValid = false;
    } else {
        message.classList.add('is-valid');
    }

    // If valid — show success
    if (isValid) {
        const successMsg = document.getElementById('successMessage');
        successMsg.style.display = 'block';

        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById('contactForm').reset();
            inputs.forEach(input => input.classList.remove('is-valid', 'is-invalid'));
            successMsg.style.display = 'none';
        }, 4000);
    }
});

// Live validation on input
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function () {
        if (this.classList.contains('is-invalid')) {
            this.classList.remove('is-invalid');
        }
    });
});