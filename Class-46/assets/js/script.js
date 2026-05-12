(function () {
    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navLinks .nav-link');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    function updateNavbar() {
        const scrollY = window.scrollY;

        // Active nav link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });

        // Scroll-to-top button visibility
        if (scrollY > 100) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', updateNavbar);

    // ========== SCROLL TO TOP ==========
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ========== SMOOTH SCROLL FOR NAV LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });

                // Close mobile navbar after click
                const navCollapse = document.getElementById('navLinks');
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    // ========== FOOTER DATE & TIME ==========
    function updateFooterDateTime() {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        document.getElementById('footerDateTime').textContent =
            '🕐 ' + now.toLocaleDateString('en-US', options);
    }
    updateFooterDateTime();
    setInterval(updateFooterDateTime, 1000);

    // ========== RESERVATION FORM VALIDATION ==========
    const form = document.getElementById('reservationForm');
    const dateInput = document.getElementById('reservationDate');

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Custom validation for date (must be today or future)
    function validateDate(value) {
        if (!value) return false;
        const selected = new Date(value + 'T00:00:00');
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        return selected >= todayDate;
    }

    // Live validation feedback
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });
        input.addEventListener('input', function () {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });

    function validateField(field) {
        let isValid = true;

        if (field.id === 'fullName') {
            isValid = field.value.trim().length >= 2;
        } else if (field.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(field.value.trim());
        } else if (field.id === 'phone') {
            const phoneRegex = /^[\d\s\(\)\-\+]{7,15}$/;
            isValid = phoneRegex.test(field.value.trim());
        } else if (field.id === 'reservationDate') {
            isValid = validateDate(field.value);
        } else if (field.id === 'guests' || field.id === 'reservationTime') {
            isValid = field.value !== '';
        }

        if (!field.value && field.hasAttribute('required')) {
            isValid = false;
        }

        if (!isValid) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
        return isValid;
    }

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formIsValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            const valid = validateField(field);
            if (!valid) formIsValid = false;
        });

        // Also validate email format even though it's required
        const emailField = document.getElementById('email');
        if (emailField.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
            emailField.classList.add('is-invalid');
            formIsValid = false;
        }

        if (formIsValid) {
            // Show success toast
            const toastEl = document.getElementById('successToast').querySelector('.toast');
            const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
            document.getElementById('toastMessage').textContent =
                'Reservation confirmed, ' + document.getElementById('fullName').value.trim().split(' ')[0] +
                '! We\'ll send a confirmation to ' + document.getElementById('email').value.trim() + '.';
            toast.show();

            // Reset form
            form.reset();
            form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                el.classList.remove('is-valid', 'is-invalid');
            });
        } else {
            // Scroll to first invalid field
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
        }
    });

    // ========== NEWSLETTER ==========
    document.getElementById('newsletterBtn').addEventListener('click', function () {
        const emailInput = document.getElementById('newsletterEmail');
        const email = emailInput.value.trim();
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            const toastEl = document.getElementById('successToast').querySelector('.toast');
            const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
            document.getElementById('toastMessage').textContent = '🎉 Subscribed! Welcome to the La Dolce Vita family.';
            toast.show();
            emailInput.value = '';
        } else {
            emailInput.style.border = '2px solid #dc3545';
            emailInput.style.outline = 'none';
            setTimeout(() => { emailInput.style.border = ''; }, 2000);
        }
    });

    // Initial call
    updateNavbar();
})();