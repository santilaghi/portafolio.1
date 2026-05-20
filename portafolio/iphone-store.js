

const productos = [
  // ======== USADOS CON GARANTÍA ========
  { modelo: "iPhone", num: "11",      gb: "128gb",       bat: 100, precios: [380],       tipo: "usado",  ultima: true,  cam: "dual",   color: "#a3aab3", screen: ["#1a3a8a","#3a6fc0"] },
  { modelo: "",       num: "11 Pro",  gb: "64gb | 256gb",bat: 100, precios: [420, 470],  tipo: "usado",  ultima: false, cam: "triple", color: "#d4b896", screen: ["#5a4530","#9c7a4d"] },
  { modelo: "",       num: "11 Pro Máx", gb: "64gb | 256gb", bat: 100, precios: [450, 520], tipo: "usado", ultima: false, cam: "triple", color: "#3d4f3d", screen: ["#0a3a2a","#1f6b4a"] },
  { modelo: "iPhone", num: "12",      gb: "64gb | 256gb",bat: 100, precios: [420],       tipo: "usado",  ultima: false, cam: "dual",   color: "#c33a3a", screen: ["#7a1a1a","#c44545"] },
  { modelo: "",       num: "12 Pro",  gb: "128gb",       bat: 100, precios: [520],       tipo: "usado",  ultima: false, cam: "triple", color: "#1a4a6e", screen: ["#0a2540","#1a4a6e"] },
  { modelo: "",       num: "12 Pro Máx", gb: "128gb | 512gb", bat: 100, precios: [620, 650], tipo: "usado", ultima: false, cam: "triple", color: "#dcdcdc", screen: ["#1a3a4a","#3a6a8a"] },
  { modelo: "",       num: "13 mini", gb: "128gb",       bat: 100, precios: [470],       tipo: "usado",  ultima: false, cam: "dual",   color: "#3a5a3d", screen: ["#1a4a30","#5a9a5a"] },
  { modelo: "iPhone", num: "13",      gb: "128gb",       bat: 100, precios: [580],       tipo: "usado",  ultima: true,  cam: "dual",   color: "#1a1a1a", screen: ["#3a1a4a","#a04a7a"] },
  { modelo: "",       num: "13 Pro",  gb: "256gb",       bat: 100, precios: [650],       tipo: "usado",  ultima: false, cam: "triple", color: "#d4b896", screen: ["#a04a1a","#e89a3a"] },
  { modelo: "iPhone", num: "14",      gb: "128gb",       bat: 85,  precios: [620],       tipo: "usado",  ultima: false, cam: "dual",   color: "#a8c5e0", screen: ["#1a4a8a","#7a9ad4"] },
  { modelo: "iPhone", num: "14 Plus", gb: "128gb",       bat: 100, precios: [700],       tipo: "usado",  ultima: true,  cam: "dual",   color: "#d4b8d4", screen: ["#5a2a7a","#9a4a9a"] },
  { modelo: "",       num: "15 Plus", gb: "128gb",       bat: 86,  precios: [720],       tipo: "usado",  ultima: false, cam: "dual",   color: "#1a1a1a", screen: ["#0a3a4a","#3a8aa0"] },
  { modelo: "",       num: "15 Pro",  gb: "256gb",       bat: 88,  precios: [900],       tipo: "usado",  ultima: true,  cam: "triple", color: "#9a8e7e", screen: ["#3a2a1a","#9a8e7e"] },
  { modelo: "",       num: "15 Pro Máx", gb: "256gb",    bat: 83,  precios: [1000],      tipo: "usado",  ultima: true,  cam: "triple", color: "#9a8e7e", screen: ["#3a2a1a","#9a8e7e"] },
  { modelo: "iPhone", num: "16",      gb: "128gb",       bat: 100, precios: [800],       tipo: "usado",  ultima: false, cam: "dual",   color: "#a8a8d4", screen: ["#1a1a4a","#4a4ad4"] },
  { modelo: "",       num: "16 Pro",  gb: "256gb",       bat: 93,  precios: [1100],      tipo: "usado",  ultima: false, cam: "triple", color: "#dcdcdc", screen: ["#1a1a1a","#3a3a3a"] },
  // ======== NUEVOS EN CAJA SELLADA ========
  { modelo: "iPhone", num: "15",      gb: "128gb",       bat: 100, precios: [820],       tipo: "sellado", ultima: false, cam: "dual",   color: "#1a1a1a", screen: ["#0a3a4a","#3a8aa0"] },
  { modelo: "iPhone", num: "16",      gb: "128gb",       bat: 100, precios: [920],       tipo: "sellado", ultima: false, cam: "dual",   color: "#e89ac5", screen: ["#a04080","#e89ac5"] },
  { modelo: "",       num: "17 air",  gb: "256gb",       bat: 100, precios: [1300],      tipo: "sellado", ultima: false, cam: "single", color: "#a8c5e0", screen: ["#1a4a7a","#7ab0d4"] },
  { modelo: "iPhone", num: "17",      gb: "256gb",       bat: 100, precios: [1200],      tipo: "sellado", ultima: true,  cam: "dual",   color: "#a8c896", screen: ["#1a4a3a","#5a9a5a"] },
  { modelo: "",       num: "17 Pro",  gb: "256gb",       bat: 100, precios: [1570],      tipo: "sellado", ultima: true,  cam: "triple", color: "#1a2540", screen: ["#0a1a30","#3a4a7a"] },
  { modelo: "",       num: "17 Pro Máx", gb: "256gb | 512gb", bat: 100, precios: [1820, 2000], tipo: "sellado", ultima: false, cam: "triple", color: "#e87a30", screen: ["#7a3a10","#e89a3a"] },
];

/* SVG iPhone con vista trasera + frontal (estilo catálogo) */
function iphoneSVG(p) {
  const id = (p.num + p.tipo).replace(/[^a-z0-9]/gi, "");
  const cam = p.cam || "dual";
  // Camera module: position lenses based on count
  let lenses = "";
  if (cam === "single") {
    lenses = `<circle cx="32" cy="32" r="6" fill="#0a0a0a"/><circle cx="32" cy="32" r="3" fill="#1a3548"/>`;
  } else if (cam === "dual") {
    lenses = `
      <circle cx="26" cy="26" r="5.5" fill="#0a0a0a"/><circle cx="26" cy="26" r="2.5" fill="#1a3548"/>
      <circle cx="26" cy="42" r="5.5" fill="#0a0a0a"/><circle cx="26" cy="42" r="2.5" fill="#1a3548"/>
    `;
  } else {
    lenses = `
      <circle cx="22" cy="22" r="6" fill="#0a0a0a"/><circle cx="22" cy="22" r="2.7" fill="#1a3548"/>
      <circle cx="42" cy="22" r="6" fill="#0a0a0a"/><circle cx="42" cy="22" r="2.7" fill="#1a3548"/>
      <circle cx="22" cy="42" r="6" fill="#0a0a0a"/><circle cx="22" cy="42" r="2.7" fill="#1a3548"/>
      <circle cx="42" cy="42" r="3.2" fill="#fbbf24"/>
    `;
  }

  return `
  <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="back-${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.color}" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="${p.color}" stop-opacity="0.75"/>
      </linearGradient>
      <linearGradient id="screen-${id}" x1="0.2" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stop-color="${p.screen[0]}"/>
        <stop offset="100%" stop-color="${p.screen[1]}"/>
      </linearGradient>
    </defs>

    <!-- BACK PHONE (rotado, atrás) -->
    <g transform="translate(0, 30) rotate(-4 50 120)">
      <rect x="10" y="10" width="80" height="200" rx="14" fill="url(#back-${id})" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/>
      <!-- camera bump -->
      <rect x="14" y="14" width="40" height="50" rx="9" fill="${p.color}" stroke="rgba(0,0,0,0.2)" stroke-width="0.4" opacity="0.85"/>
      <g transform="translate(0, 0)">${lenses}</g>
      <!-- Apple logo (simplificado) -->
      <g transform="translate(50, 110)">
        <path d="M 0 -8 C -4 -8 -8 -5 -8 0 C -8 5 -4 9 0 9 C 4 9 8 5 8 0 C 8 -5 4 -8 0 -8 Z M 1 -10 C 1 -12 3 -13 4 -13 C 4 -11 3 -10 1 -10 Z"
              fill="rgba(255,255,255,0.85)" transform="scale(1.2)"/>
      </g>
      <!-- highlight -->
      <rect x="10" y="10" width="80" height="60" rx="14" fill="white" opacity="0.08"/>
    </g>

    <!-- FRONT PHONE (rotado al lado opuesto, adelante) -->
    <g transform="translate(80, 0) rotate(3 60 140)">
      <!-- frame -->
      <rect x="20" y="14" width="86" height="220" rx="16" fill="#0a0a0a" stroke="rgba(0,0,0,0.4)" stroke-width="0.5"/>
      <!-- screen -->
      <rect x="24" y="18" width="78" height="212" rx="13" fill="url(#screen-${id})"/>
      <!-- dynamic island -->
      <rect x="50" y="26" width="26" height="8" rx="4" fill="#000"/>
      <circle cx="70" cy="30" r="1.5" fill="#1a3548"/>
      <!-- screen highlight -->
      <rect x="24" y="18" width="78" height="80" rx="13" fill="white" opacity="0.08"/>
    </g>
  </svg>`;
}

/* iconos SVG para los pills */
const ICON_CHIP = `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)"/><rect x="2" y="9" width="2" height="2"/><rect x="2" y="13" width="2" height="2"/><rect x="20" y="9" width="2" height="2"/><rect x="20" y="13" width="2" height="2"/><rect x="9" y="2" width="2" height="2"/><rect x="13" y="2" width="2" height="2"/><rect x="9" y="20" width="2" height="2"/><rect x="13" y="20" width="2" height="2"/></svg>`;
const ICON_BAT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="8" width="17" height="10" rx="2"/><line x1="20" y1="11" x2="20" y2="15" stroke-linecap="round" stroke-width="2.5"/><rect x="4" y="10" width="13" height="6" fill="currentColor"/></svg>`;

const contenedor = document.getElementById("productos");

productos.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";

  const fullName = (p.modelo ? p.modelo + " " : "") + p.num;
  const watermark = p.num.toLowerCase().replace("máx", "máx").replace("iphone ", "iph ");
  const labelTipo = p.tipo === "sellado"
    ? `nuevo <b>caja sellada</b>`
    : `usado <b>con garantía</b>`;
  const pricesHTML = p.precios.map(price =>
    `<button class="price-pill" data-modelo="${fullName}" data-gb="${p.gb}" data-precio="${price}">$${price} usd</button>`
  ).join("");
  const lastTag = p.ultima
    ? `<span class="tag-last">${p.precios.length === 1 ? 'última unidad' : 'último disponible'}</span>`
    : '';

  // model label: "iPhone 11" o "11 Pro Máx" (con la palabra Pro/Máx en bold)
  let modelHTML;
  if (p.modelo) {
    modelHTML = `${p.modelo} <b>${p.num}</b>`;
  } else {
    // separa el numero y "Pro" / "Pro Máx" / "mini" etc para hacer bold la variante
    const match = p.num.match(/^(\d+)\s+(.+)$/);
    if (match) {
      modelHTML = `${match[1]} <b>${match[2]}</b>`;
    } else {
      modelHTML = `<b>${p.num}</b>`;
    }
  }

  card.innerHTML = `
    <div class="window-dots" aria-hidden="true">
      <i class="red"></i><i class="yellow"></i><i class="green"></i>
    </div>
    <div class="card-body">
      <div class="watermark">${watermark}</div>
      <div class="card-inner">
        <h3 class="model">${modelHTML}</h3>
        <div class="pills">
          <span class="pill-spec">${ICON_CHIP} ${p.gb}</span>
          <span class="pill-spec outline">${ICON_BAT} ${p.bat}%</span>
        </div>
      </div>
      <div class="phone-art">${iphoneSVG(p)}</div>
      <div class="tag-warranty">${labelTipo}</div>
      <div class="prices">${pricesHTML}</div>
    </div>
    ${lastTag}
  `;

  contenedor.appendChild(card);
});

/* WhatsApp: click en el price-pill abre con mensaje formateado */
document.getElementById("productos").addEventListener("click", (e) => {
  const btn = e.target.closest(".price-pill");
  if (!btn) return;
  const { modelo, gb, precio } = btn.dataset;
  const msg = `Hola! Vi en la web el ${modelo} de ${gb} a USD ${precio}. ¿Sigue disponible?`;
  window.open(`https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(msg)}`, "_blank");
});

/* Limpiar splash del DOM cuando termina la animación */
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (!splash) return;
  // Split termina a 2.45s. Damos un margen.
  setTimeout(() => splash.remove(), 2700);
});

