// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// Bootstrap Form Validation
(function () {
    'use strict'
    var form = document.getElementById('contactForm')
    var successAlert = document.getElementById('successAlert')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation()
        if (form.checkValidity()) {
            // Show success message
            successAlert.classList.remove('d-none');

            // Reset form after a delay
            setTimeout(() => {
                form.reset();
                form.classList.remove('was-validated');
                setTimeout(() => {
                    successAlert.classList.add('d-none');
                }, 3000);
            }, 1000);
        }
        form.classList.add('was-validated')
    }, false)
})()