// Date and Time
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toDateString();
    document.getElementById("clock").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}
setInterval(updateClock, 1000);
updateClock();


// Form Validation
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Declare variables
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check every inputs
    if (name === "") {
        alert("Please enter your name!");
    } else if (name.length < 4) {
        alert("Please enter your name above 4 words!");
    } else if (email === "") {
        alert("Please enter your email!");
    } else if (message === "") {
        alert("Please write your messages!");
    } else if (message.length < 10) {
        alert("Please write your messages above 10 words!");
    } else {
        alert("Your form submit done! Thank you!")
        myForm.reset();
    }
});


// Back To Top Button
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none"
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});