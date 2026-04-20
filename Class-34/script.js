window.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('2026-04-28T00:00:00').getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
            document.getElementById('count_down').innerHTML = "<p class='finished-msg'>THE WAIT IS OVER!</p>";
            document.getElementById('title').style.display = 'none';
            return;
        }

        // Calculations
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // Update DOM with padding
        document.getElementById('days').innerText = String(d).padStart(2, '0');
        document.getElementById('hours').innerText = String(h).padStart(2, '0');
        document.getElementById('minutes').innerText = String(m).padStart(2, '0');
        document.getElementById('seconds').innerText = String(s).padStart(2, '0');
    };

    setInterval(updateTimer, 1000);
    updateTimer(); // Run once immediately
});