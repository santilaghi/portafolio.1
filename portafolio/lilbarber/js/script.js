/* ============ LOGO ============ */
const LOGO = "data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22neonGlow%22%3E%3CfeGaussianBlur%20stdDeviation%3D%221.2%22%20result%3D%22blur%22%2F%3E%3CfeMerge%3E%3CfeMergeNode%20in%3D%22blur%22%2F%3E%3CfeMergeNode%20in%3D%22SourceGraphic%22%2F%3E%3C%2FfeMerge%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22poleGrad%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23d4a017%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fff%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C!--%20circle%20bg%20--%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2298%22%20fill%3D%22%230a0a0a%22%20stroke%3D%22%23d4a017%22%20stroke-width%3D%222%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2292%22%20fill%3D%22none%22%20stroke%3D%22%23d4a017%22%20stroke-width%3D%220.8%22%20opacity%3D%220.4%22%2F%3E%3C!--%20BARBER%20POLE%20(vertical%2C%20stylized)%20--%3E%3Cg%20transform%3D%22translate(100%2C%2070)%22%20filter%3D%22url(%23neonGlow)%22%3E%3C!--%20top%20cap%20--%3E%3Crect%20x%3D%22-12%22%20y%3D%22-22%22%20width%3D%2224%22%20height%3D%226%22%20rx%3D%221%22%20fill%3D%22%23d4a017%22%2F%3E%3C!--%20pole%20tube%20--%3E%3Crect%20x%3D%22-10%22%20y%3D%22-16%22%20width%3D%2220%22%20height%3D%2256%22%20fill%3D%22%230a0a0a%22%20stroke%3D%22%23d4a017%22%20stroke-width%3D%221.5%22%2F%3E%3C!--%20diagonal%20stripes%20--%3E%3Cpath%20d%3D%22M%20-10%20-10%20L%2010%20-16%20M%20-10%200%20L%2010%20-6%20M%20-10%2010%20L%2010%204%20M%20-10%2020%20L%2010%2014%20M%20-10%2030%20L%2010%2024%20M%20-10%2040%20L%2010%2034%22%20stroke%3D%22%23d4a017%22%20stroke-width%3D%222.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C!--%20bottom%20cap%20--%3E%3Crect%20x%3D%22-12%22%20y%3D%2240%22%20width%3D%2224%22%20height%3D%226%22%20rx%3D%221%22%20fill%3D%22%23d4a017%22%2F%3E%3C%2Fg%3E%3C!--%20decorative%20star%20points%20around%20--%3E%3Cg%20fill%3D%22%23d4a017%22%20opacity%3D%220.7%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2250%22%20r%3D%221.5%22%2F%3E%3Ccircle%20cx%3D%22160%22%20cy%3D%2255%22%20r%3D%221.5%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%22100%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%22168%22%20cy%3D%22100%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C!--%20Banner%20with%20LIL%20BARBER%20text%20--%3E%3Cg%20transform%3D%22translate(100%2C%20145)%22%3E%3C!--%20ribbon%20--%3E%3Cpath%20d%3D%22M%20-55%20-10%20L%2055%20-10%20L%2060%200%20L%2055%2010%20L%20-55%2010%20L%20-60%200%20Z%22%20fill%3D%22%23d4a017%22%2F%3E%3C!--%20side%20flaps%20--%3E%3Cpath%20d%3D%22M%20-55%2010%20L%20-65%2018%20L%20-55%2016%20Z%22%20fill%3D%22%239eaf00%22%2F%3E%3Cpath%20d%3D%22M%2055%2010%20L%2065%2018%20L%2055%2016%20Z%22%20fill%3D%22%239eaf00%22%2F%3E%3C!--%20text%20--%3E%3Ctext%20x%3D%220%22%20y%3D%223%22%20text-anchor%3D%22middle%22%20font-family%3D%22Bebas%20Neue%2C%20Impact%2C%20sans-serif%22%20font-size%3D%2213%22%20font-weight%3D%22bold%22%20letter-spacing%3D%222%22%20fill%3D%22%230a0a0a%22%3ELIL%20BARBER%3C%2Ftext%3E%3C%2Fg%3E%3C!--%20top%20arc%20text%20decorative%20--%3E%3Cpath%20id%3D%22topArc%22%20d%3D%22M%2030%20100%20A%2070%2070%200%200%201%20170%20100%22%20fill%3D%22none%22%2F%3E%3Ctext%20font-family%3D%22JetBrains%20Mono%2C%20monospace%22%20font-size%3D%227%22%20letter-spacing%3D%223%22%20fill%3D%22%23d4a017%22%20opacity%3D%220.7%22%3E%3CtextPath%20href%3D%22%23topArc%22%20startOffset%3D%2250%25%22%20text-anchor%3D%22middle%22%3E%E2%98%85%20SAN%20MIGUEL%20%C2%B7%20DESDE%202024%20%E2%98%85%3C%2FtextPath%3E%3C%2Ftext%3E%3C%2Fsvg%3E";
document.getElementById('brand-logo').src = LOGO;

/* ============ STATUS EN VIVO ============ */
function updateLiveStatus() {
  const now = new Date();
  const day = now.getDay();   // 0=Dom, 1=Lun, ...
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour + min/60;

  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');

  const opening1 = 9.5;
  const closing1 = 13;
  const opening2 = 15.5;
  const closing2 = 20;

  let abierto = false;
  if (day === 0) abierto = false;
  else if (day === 1) abierto = (time >= opening1 && time < closing1) || (time >= opening2 && time < closing2);
  else abierto = (time >= opening1 && time < closing1) || (time >= opening2 && time < closing2);

  if (!abierto) {
    dot.className = 'status-dot busy';
    text.textContent = 'Cerrado · Volvemos pronto';
    return;
  }

  const isPeakDay = (day === 5 || day === 6);
  const isPeakHour = (time >= 17 && time < 20);
  const isLunchPeak = (time >= 11.5 && time < 13);

  let level;
  if (isPeakDay && isPeakHour) level = 2;
  else if (isPeakDay || isPeakHour || isLunchPeak) level = 1;
  else level = 0;

  if (level === 0) {
    dot.className = 'status-dot';
    text.textContent = 'Vení ahora · Sin espera';
  } else if (level === 1) {
    dot.className = 'status-dot medium';
    text.textContent = 'Espera ~15 min';
  } else {
    dot.className = 'status-dot busy';
    text.textContent = 'Salón lleno · ~30 min';
  }
}
updateLiveStatus();
setInterval(updateLiveStatus, 60000);

/* ============ REVEAL ON SCROLL ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

/* ============ SPLASH REMOVAL ============ */
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  if (!splash) return;
  setTimeout(() => splash.remove(), 3300);
});
