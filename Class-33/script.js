function updateClock() {
    const now = new Date();

    // Format numbers to always have two digits (e.g., 05 instead of 5)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update Time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // Update Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Initialize and run every second
setInterval(updateClock, 1000);
updateClock(); 