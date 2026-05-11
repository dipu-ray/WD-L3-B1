/* ── LIVE CLOCK ── */
function updateClock() {
    const now = new Date();
    const opts = {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    };
    document.getElementById('clock-text').textContent = now.toLocaleString('en-US', opts);
}
updateClock();
setInterval(updateClock, 1000);

/* ── SCROLL-TO-TOP ── */
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 320);
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── FORM VALIDATION ── */
document.getElementById('admissionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const fields = [
        { id: 'studentName', check: v => v.trim().length >= 3 },
        { id: 'dob', check: v => v !== '' },
        { id: 'grade', check: v => v !== '' },
        { id: 'parentName', check: v => v.trim().length >= 3 },
        { id: 'email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: 'phone', check: v => /^[0-9+\-\s]{10,15}$/.test(v) },
    ];

    fields.forEach(({ id, check }) => {
        const el = document.getElementById(id);
        if (!check(el.value)) {
            el.classList.add('is-invalid');
            el.classList.remove('is-valid');
            valid = false;
        } else {
            el.classList.remove('is-invalid');
            el.classList.add('is-valid');
        }
    });

    if (valid) {
        this.reset();
        this.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        const msg = document.getElementById('formSuccess');
        msg.classList.remove('d-none');
        setTimeout(() => msg.classList.add('d-none'), 5000);
        document.getElementById('admissions').scrollIntoView({ behavior: 'smooth' });
    }
});

/* Remove invalid on input */
document.querySelectorAll('.form-control, .form-select').forEach(el => {
    el.addEventListener('input', () => {
        if (el.value.trim()) el.classList.remove('is-invalid');
    });
});