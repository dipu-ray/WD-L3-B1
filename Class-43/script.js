// ===========================
// Live Date & Time
// ===========================

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    const date = now.toDateString();

    document.getElementById("clock").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}

setInterval(updateClock, 1000);

updateClock();

// ===========================
// Form Validation
// ===========================

document
    .getElementById("myForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let valid = true;

        // Clear previous errors
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("messageError").innerHTML = "";

        // Name validation
        if (name === "") {
            document.getElementById("nameError").innerHTML =
                "Name is required";
            valid = false;
        }

        // Email validation
        if (email === "") {
            document.getElementById("emailError").innerHTML =
                "Email is required";
            valid = false;
        }

        // Message validation
        if (message === "") {
            document.getElementById("messageError").innerHTML =
                "Message is required";
            valid = false;
        }

        // Success
        if (valid) {
            alert("Form submitted successfully!");
            document.getElementById("myForm").reset();
        }
    });

// ===========================
// Back To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});