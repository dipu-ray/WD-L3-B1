// Form validation (Contact Form)
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    nameError.textContent = "";
    emailError.textContent = "";
    if (name === "") {
        nameError.textContent = "Name must be entered.";
        return false;
    }
    if (email === "") {
        emailError.textContent = "Email must be entered.";
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email format.";
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

// Feedback Modal: send feedback
function submitFeedback() {
    const nameInput = document.getElementById("feedbackName");
    const messageInput = document.getElementById("feedbackMessage");
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (message === "") {
        alert("Please write your feedback message.");
        return;
    }
    const msg = `From: ${name}\nMessage: ${message}`;
    alert("Thank you!\n\n" + msg);

    // Optional: clear fields after submit
    nameInput.value = "";
    messageInput.value = "";
}

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}