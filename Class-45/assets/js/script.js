/* ── LIVE CLOCK ── */
function updateClock() {
    const now = new Date();
    document.getElementById('clock-text').textContent = now.toLocaleString('en-US', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });
}
updateClock(); setInterval(updateClock, 1000);

/* ── SCROLL TOP ── */
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 350);
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── COUNTDOWN TIMER ── */
let countSecs = (8 * 3600) + (45 * 60);
function updateCountdown() {
    const h = Math.floor(countSecs / 3600);
    const m = Math.floor((countSecs % 3600) / 60);
    const s = countSecs % 60;
    document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
    if (countSecs > 0) countSecs--;
}
updateCountdown(); setInterval(updateCountdown, 1000);

/* ── CART ── */
let cart = [], cartTotal = 0;

function addToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) { existing.qty++; } else { cart.push({ name, price, qty: 1 }); }
    cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    updateCartUI();
    showToast(`<i class="bi bi-bag-check-fill me-2" style="color:var(--gold)"></i> <strong>${name}</strong> added to cart!`);
}

function updateCartUI() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('cartCount').textContent = count;

    const tax = cartTotal * 0.08;
    const total = cartTotal + tax;
    document.getElementById('subtotalAmt').textContent = '$' + cartTotal.toFixed(2);
    document.getElementById('taxAmt').textContent = '$' + tax.toFixed(2);
    document.getElementById('totalAmt').textContent = '$' + total.toFixed(2);

    const container = document.getElementById('cartItems');
    if (cart.length === 0) {
        container.innerHTML = '<p style="color:rgba(255,255,255,.4);font-size:.88rem;text-align:center;padding:1.5rem 0">Your cart is empty.<br>Add products above!</p>';
        return;
    }
    const imgs = [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&q=60',
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&q=60',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&q=60',
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=80&q=60',
    ];
    container.innerHTML = cart.map((item, i) => `
      <div class="order-item">
        <img src="${imgs[i % imgs.length]}" class="order-item-img" alt="${item.name}"/>
        <div>
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-qty">Qty: ${item.qty}</div>
        </div>
        <div class="order-item-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>
    `).join('');
}

function showToast(msg) {
    const t = document.getElementById('cartToast');
    t.innerHTML = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2800);
}

/* ── FILTER TABS ── */
document.querySelectorAll('.filter-tabs .btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-tabs .btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

/* ── CATEGORY PILLS ── */
document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', function (e) {
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
    });
});

/* ── CARD FORMAT ── */
const cardInput = document.getElementById('cardNum');
if (cardInput) {
    cardInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '').substring(0, 16);
        this.value = v.replace(/(.{4})/g, '$1 ').trim();
    });
}
const expiryInput = document.getElementById('expiry');
if (expiryInput) {
    expiryInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '').substring(0, 4);
        if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2);
        this.value = v;
    });
}

/* ── FORM VALIDATION ── */
document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const fields = [
        { id: 'firstName', check: v => v.trim().length >= 2 },
        { id: 'lastName', check: v => v.trim().length >= 2 },
        { id: 'emailAddr', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: 'phone', check: v => /^[0-9+\-\s]{10,15}$/.test(v) },
        { id: 'address', check: v => v.trim().length >= 5 },
        { id: 'city', check: v => v.trim().length >= 2 },
        { id: 'zip', check: v => /^\d{4,10}$/.test(v) },
        { id: 'country', check: v => v !== '' },
        { id: 'cardNum', check: v => /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(v) },
        { id: 'expiry', check: v => /^(0[1-9]|1[0-2])\/\d{2}$/.test(v) },
        { id: 'cvv', check: v => /^\d{3,4}$/.test(v) },
    ];

    fields.forEach(({ id, check }) => {
        const el = document.getElementById(id);
        if (!check(el.value)) {
            el.classList.add('is-invalid'); el.classList.remove('is-valid'); valid = false;
        } else {
            el.classList.remove('is-invalid'); el.classList.add('is-valid');
        }
    });

    const terms = document.getElementById('agreeTerms');
    if (!terms.checked) {
        terms.classList.add('is-invalid'); valid = false;
    } else {
        terms.classList.remove('is-invalid');
    }

    if (valid) {
        this.reset();
        this.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        cart = []; cartTotal = 0; updateCartUI();
        document.getElementById('cartCount').textContent = '0';
        const successEl = document.getElementById('orderSuccess');
        successEl.style.display = 'block';
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => successEl.style.display = 'none', 7000);
    }
});

document.querySelectorAll('.form-control, .form-select').forEach(el => {
    el.addEventListener('input', () => { if (el.value) el.classList.remove('is-invalid'); });
});