'use strict';

/* ═══════════════════════════════════════════════
   DATOS DEL MENÚ
   ═══════════════════════════════════════════════ */
const BURGERS = [
  {
    name: 'CALAMARDO',
    desc: 'carne con cheddar',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    emoji: '🍔',
    prices: [
      { size: 'SIMPLE', val: '$9.900' },
      { size: 'DOBLE',  val: '$10.400' },
      { size: 'TRIPLE', val: '$10.800' }
    ]
  },
  {
    name: 'BOB ESPONJA',
    desc: 'carne con cheddar y bacon',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80',
    emoji: '🍔',
    prices: [
      { size: 'SIMPLE', val: '$10.200' },
      { size: 'DOBLE',  val: '$10.600' },
      { size: 'TRIPLE', val: '$11.000' }
    ]
  },
  {
    name: 'ARENITA',
    desc: 'carne con cheddar, bacon y cebolla caramelizada',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=600&q=80',
    emoji: '🍔',
    prices: [
      { size: 'SIMPLE', val: '$10.400' },
      { size: 'DOBLE',  val: '$10.900' },
      { size: 'TRIPLE', val: '$11.300' }
    ]
  },
  {
    name: 'PATRICIO',
    desc: 'carne con cheddar, bacon y huevo frito',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80',
    emoji: '🍔',
    prices: [
      { size: 'SIMPLE', val: '$10.400' },
      { size: 'DOBLE',  val: '$10.900' },
      { size: 'TRIPLE', val: '$11.300' }
    ]
  },
  {
    name: 'DON CANGREJO',
    desc: 'carne con cheddar, lechuga y tomate',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    emoji: '🍔',
    prices: [
      { size: 'SIMPLE', val: '$10.300' },
      { size: 'DOBLE',  val: '$10.700' },
      { size: 'TRIPLE', val: '$11.000' }
    ]
  }
];

const AGREGADOS = [
  { name: 'SAZONADOR',          price: 'SIN COSTO',           free: true,  icon: '🧂' },
  { name: 'PORCION DE PAPAS DOBLE', price: '$4.500',           free: false, icon: '🍟' },
  { name: 'MEDALLON EXTRA',     price: '$3.000',               free: false, icon: '🥩' },
  { name: 'EXTRA CHEDDAR',      price: '$2.500',               free: false, icon: '🧀' },
  {
    name: 'SALSAS',
    price: 'SIN COSTO ADICIONAL',
    free: true,
    icon: '🫙',
    sauces: ['Barbacoa', 'Doble Cuarto de Libra', 'Big Mac', 'Especial de la Casa', 'Fórmula Secreta']
  }
];

/* ═══════════════════════════════════════════════
   CART STATE
   ═══════════════════════════════════════════════ */
const cart = [];

/* Número de WhatsApp — reemplazá con el real (sin + ni espacios) */
const WA_NUMBER = '549XXXXXXXXXX';

function parsePrice(str) {
  return parseInt(str.replace(/[$\.]/g, ''), 10);
}

function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

function addToCart(name, size, priceStr, sourceEl) {
  const price = parsePrice(priceStr);
  const idx = cart.findIndex(i => i.name === name && i.size === size);
  if (idx >= 0) cart[idx].qty++;
  else cart.push({ name, size, price, qty: 1 });
  syncCart();
  showAddAnimation(sourceEl);
  showToast(`${name}${size ? ' ' + size : ''} agregado!`);
}

function updateQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  syncCart();
}

function clearCart() {
  cart.length = 0;
  syncCart();
}

function getTotal()      { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getTotalItems() { return cart.reduce((s, i) => s + i.qty, 0); }

function syncCart() {
  renderCartItems();
  updateCartBadge();
}

/* ═══════════════════════════════════════════════
   INTRO ANIMATION
   ═══════════════════════════════════════════════ */
(function initIntro() {
  const overlay   = document.getElementById('introOverlay');
  const bubblesEl = document.getElementById('introBubbles');
  const logoImg   = overlay.querySelector('.intro-logo');

  /* Logo fallback */
  logoImg.addEventListener('error', () => {
    logoImg.classList.add('error');
  });

  /* Generate bubbles */
  document.body.style.overflow = 'hidden';
  for (let i = 0; i < 18; i++) {
    const b    = document.createElement('div');
    b.className = 'intro-bubble';
    const size = 6 + Math.random() * 38;
    b.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${4 + Math.random() * 92}%`,
      `animation-duration:${2.5 + Math.random() * 3.5}s`,
      `animation-delay:${Math.random() * 2.5}s`
    ].join(';');
    bubblesEl.appendChild(b);
  }

  /* Exit after 3 seconds */
  setTimeout(() => {
    overlay.classList.add('exiting');
    overlay.addEventListener('animationend', () => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, { once: true });
  }, 3000);
})();

/* ═══════════════════════════════════════════════
   HERO IMAGE FALLBACK
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      heroImg.style.display = 'none';
      const fb = document.querySelector('.hero-img-fallback');
      if (fb) fb.style.display = 'flex';
    });
  }
});

/* ═══════════════════════════════════════════════
   DOM
   ═══════════════════════════════════════════════ */
const navbar      = document.getElementById('navbar');
const navToggle   = document.getElementById('navToggle');
const navLinks    = document.getElementById('navLinks');
const menuGrid    = document.getElementById('menuGrid');
const filterBtns  = document.querySelectorAll('.filter-btn');
const toast       = document.getElementById('toast');
const progress    = document.getElementById('scrollProgress');

/* Cart DOM */
const cartBtn      = document.getElementById('cartBtn');
const cartDrawer   = document.getElementById('cartDrawer');
const cartOverlay  = document.getElementById('cartOverlay');
const cartClose    = document.getElementById('cartClose');
const cartItemsEl  = document.getElementById('cartItems');
const cartEmptyEl  = document.getElementById('cartEmpty');
const cartFooterEl = document.getElementById('cartFooter');
const cartTotalEl  = document.getElementById('cartTotal');
const cartClear     = document.getElementById('cartClear');
const cartIg        = document.getElementById('cartInstagram');
const cartBadgeEl   = document.querySelector('.cart-badge');

/* ═══════════════════════════════════════════════
   SCROLL + NAVBAR
   ═══════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const st  = window.scrollY;
  const dh  = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (dh > 0 ? (st / dh) * 100 : 0) + '%';
  navbar.classList.toggle('scrolled', st > 20);
}, { passive: true });

/* ═══════════════════════════════════════════════
   MOBILE NAV
   ═══════════════════════════════════════════════ */
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ═══════════════════════════════════════════════
   CART UI
   ═══════════════════════════════════════════════ */
function openCart()  {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
cartClear.addEventListener('click', clearCart);

cartIg.addEventListener('click', async () => {
  if (!cart.length) return;

  const lines = cart.map(i =>
    `• ${i.name}${i.size ? ' ' + i.size : ''} x${i.qty} — ${formatPrice(i.price * i.qty)}`
  );
  const msg = `Hola CangreBurger! 🍔\n\nQuiero hacer el siguiente pedido:\n\n${lines.join('\n')}\n\nTotal: ${formatPrice(getTotal())}\n\n¡Gracias!`;

  try {
    await navigator.clipboard.writeText(msg);
    showToast('¡Pedido copiado! Pegalo en el DM 📲');
  } catch {
    showToast('Abriendo Instagram...');
  }

  setTimeout(() => {
    window.open('https://ig.me/m/cangreburger.sm', '_blank');
  }, 600);
});

function updateCartBadge() {
  const n = getTotalItems();
  cartBadgeEl.textContent = n;
  cartBadgeEl.style.display = n > 0 ? 'flex' : 'none';
}

function renderCartItems() {
  const hasItems = cart.length > 0;
  cartEmptyEl.style.display  = hasItems ? 'none' : 'flex';
  cartFooterEl.style.display = hasItems ? 'block' : 'none';
  cartItemsEl.innerHTML = '';
  if (!hasItems) return;

  cart.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        ${item.size ? `<p class="cart-item-size">${item.size}</p>` : ''}
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-idx="${idx}" data-delta="-1">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-idx="${idx}" data-delta="1">+</button>
      </div>
      <p class="cart-item-price">${formatPrice(item.price * item.qty)}</p>
    `;
    cartItemsEl.appendChild(el);
  });

  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () =>
      updateQty(+btn.dataset.idx, +btn.dataset.delta)
    );
  });

  cartTotalEl.textContent = formatPrice(getTotal());
}

/* ═══════════════════════════════════════════════
   ADD ANIMATION
   ═══════════════════════════════════════════════ */
function showAddAnimation(sourceEl) {
  /* 1. Bounce del ícono de carrito */
  cartBtn.classList.remove('popping');
  void cartBtn.offsetWidth; /* reflow para reiniciar animación */
  cartBtn.classList.add('popping');
  setTimeout(() => cartBtn.classList.remove('popping'), 500);

  /* 2. Flash verde en el elemento origen */
  if (sourceEl) {
    sourceEl.classList.remove('row-flash');
    void sourceEl.offsetWidth;
    sourceEl.classList.add('row-flash');
    setTimeout(() => sourceEl.classList.remove('row-flash'), 500);
  }

  /* 3. +1 flotante desde el origen */
  if (!sourceEl) return;
  const rect = sourceEl.getBoundingClientRect();
  const fly  = document.createElement('div');
  fly.className   = 'cart-fly';
  fly.textContent = '+1';
  fly.style.left  = (rect.left + rect.width / 2) + 'px';
  fly.style.top   = (rect.top + window.scrollY + rect.height / 2) + 'px';
  document.body.appendChild(fly);
  fly.addEventListener('animationend', () => fly.remove());
}

/* ═══════════════════════════════════════════════
   BUILD BURGER CARD
   ═══════════════════════════════════════════════ */
function buildBurgerCard(item, idx) {
  const card = document.createElement('article');
  card.className = 'menu-card';
  card.setAttribute('role', 'listitem');
  card.dataset.category = 'burger';

  const priceRows = item.prices.map(p => `
    <div class="price-row"
         data-name="${item.name}"
         data-size="${p.size}"
         data-price="${p.val}">
      <span class="price-size">${p.size}</span>
      <span class="price-dots"></span>
      <span class="price-val">${p.val}</span>
      <span class="price-add" aria-hidden="true">+</span>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="card-image">
      <img src="${item.image}" alt="Burger ${item.name}" loading="lazy" />
      <div class="card-emoji-fallback">${item.emoji}</div>
    </div>
    <div class="card-checker"></div>
    <div class="card-body">
      <h3 class="card-title">${item.name}</h3>
      <p class="card-desc">${item.desc}</p>
      <div class="price-table">${priceRows}</div>
    </div>
  `;

  /* Image fallback */
  const img      = card.querySelector('img');
  const fallback = card.querySelector('.card-emoji-fallback');
  img.addEventListener('error', () => {
    img.style.display = 'none';
    fallback.classList.add('show');
  });

  /* Per-row add to cart */
  card.querySelectorAll('.price-row').forEach(row => {
    row.addEventListener('click', () =>
      addToCart(row.dataset.name, row.dataset.size, row.dataset.price, row)
    );
  });

  setTimeout(() => card.classList.add('visible'), idx * 80);
  return card;
}

/* ═══════════════════════════════════════════════
   BUILD AGREGADO CARD
   ═══════════════════════════════════════════════ */
function buildAgregadoCard(item, idx) {
  const card = document.createElement('div');
  card.className = 'agregado-card';
  card.setAttribute('role', 'listitem');
  card.dataset.category = 'agregados';

  const saucesHTML = item.sauces
    ? `<div class="sauce-list">${item.sauces.map(s => `<span class="sauce-tag">${s}</span>`).join('')}</div>`
    : '';

  /* Solo items con precio real pueden agregarse al carrito */
  const addBtnHTML = (!item.free)
    ? `<button class="agregado-add-btn" aria-label="Agregar ${item.name} al pedido">+ Agregar</button>`
    : '';

  card.innerHTML = `
    <div class="agregado-icon">${item.icon}</div>
    <div class="agregado-info">
      <p class="agregado-name">${item.name}</p>
      <p class="agregado-price${item.free ? ' free' : ''}">${item.price}</p>
      ${saucesHTML}
      ${addBtnHTML}
    </div>
  `;

  if (!item.free) {
    const btn = card.querySelector('.agregado-add-btn');
    btn.addEventListener('click', () =>
      addToCart(item.name, '', item.price, btn)
    );
  }

  setTimeout(() => card.classList.add('visible'), idx * 70);
  return card;
}

/* ═══════════════════════════════════════════════
   RENDER MENU
   ═══════════════════════════════════════════════ */
function renderMenu(filter = 'all') {
  menuGrid.innerHTML = '';
  const showBurgers   = filter === 'all' || filter === 'burger';
  const showAgregados = filter === 'all' || filter === 'agregados';
  let idx = 0;
  if (showBurgers)   BURGERS.forEach(item => menuGrid.appendChild(buildBurgerCard(item, idx++)));
  if (showAgregados) AGREGADOS.forEach(item => menuGrid.appendChild(buildAgregadoCard(item, idx++)));
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.filter);
  });
});

renderMenu();

/* ═══════════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════════ */
let toastTimer = null;

function showToast(msg = '¡Agregado al pedido!') {
  toast.querySelector('.toast-text').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ═══════════════════════════════════════════════
   INTERSECTION OBSERVER
   ═══════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('revealed');
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

function animateCount(el, target, duration = 1500) {
  const isFloat = !Number.isInteger(target);
  const suffix  = el.dataset.suffix || (el.dataset.count ? '+' : '');
  const start   = performance.now();
  (function update(now) {
    const p = Math.min((now - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = (isFloat
      ? (target * e).toFixed(1)
      : Math.round(target * e).toLocaleString('es-AR')) + suffix;
    if (p < 1) requestAnimationFrame(update);
  })(start);
}

const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const strong = e.target.querySelector('strong[data-count], strong[data-suffix]');
    if (!strong) return;
    if (strong.dataset.count) animateCount(strong, Number(strong.dataset.count));
    else {
      const n = parseFloat(strong.textContent.replace(strong.dataset.suffix, ''));
      if (!isNaN(n)) animateCount(strong, n);
    }
    statObs.unobserve(e.target);
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stat').forEach(el => statObs.observe(el));
