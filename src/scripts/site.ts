// Site runtime (small, runs on every page). Heavy motion lives in motion.ts and loads on idle.

/* ── fit-to-width giant lines ─────────────────────────────────────────── */
export function fitAll() {
  const groups = new Map<string, [HTMLElement, number][]>();
  document.querySelectorAll<HTMLElement>('.fit-box [data-fit]').forEach((el) => {
    const box = el.closest<HTMLElement>('.fit-box');
    if (!box || !el.offsetParent) return; // hidden variant (desktop vs mobile lines)
    el.style.fontSize = '100px';
    const w = el.getBoundingClientRect().width;
    if (!w || !box.clientWidth) return;
    const size = ((100 * box.clientWidth) / w) * 0.995;
    const g = el.dataset.fitGroup;
    if (g) {
      const key = `${[...document.querySelectorAll('.fit-box')].indexOf(box)}:${g}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push([el, size]);
    } else el.style.fontSize = `${size}px`;
  });
  groups.forEach((list) => {
    const m = Math.min(...list.map((x) => x[1]));
    list.forEach(([el]) => (el.style.fontSize = `${m}px`));
  });
}
fitAll();
document.fonts?.ready.then(() => {
  fitAll();
  window.dispatchEvent(new Event('fit:done'));
});
let rt = 0;
let lastW = window.innerWidth;
window.addEventListener('resize', () => {
  if (window.innerWidth === lastW) return; // ignore mobile URL-bar height changes
  lastW = window.innerWidth;
  clearTimeout(rt);
  rt = window.setTimeout(() => {
    fitAll();
    window.dispatchEvent(new Event('fit:done'));
  }, 120);
});

/* ── external links without href (owner law): data-x = base64 URL ─────── */
document.querySelectorAll<HTMLElement>('[data-x]').forEach((el) => {
  const go = () => {
    const u = atob(el.dataset.x || '');
    if (/^https:\/\//.test(u)) window.open(u, '_blank', 'noopener');
  };
  el.addEventListener('click', go);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      go();
    }
  });
});

/* ── contact dialog ───────────────────────────────────────────────────── */
const dlg = document.querySelector<HTMLDialogElement>('[data-contact-dialog]');
if (dlg && typeof dlg.showModal === 'function') {
  document.querySelectorAll<HTMLElement>('[data-open-contact]').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (location.pathname.replace(/\.html$/, '') === '/contact') return; // the page has its own form
      e.preventDefault();
      dlg.showModal();
      dlg.querySelector('form')?.dispatchEvent(new Event('contact:shown'));
    });
  });
  dlg.querySelector('[data-close]')?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });
}

/* ── reveals: [data-rise] blocks, [data-mask] lines (CSS transitions) ─── */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll<HTMLElement>('[data-rise], [data-mask]');
const showAll = () => revealEls.forEach((el) => el.classList.add('is-in'));
window.addEventListener('beforeprint', showAll);
if (reduce || !('IntersectionObserver' in window)) showAll();
else {
  // masked lines in one block rise 80ms apart
  document.querySelectorAll<HTMLElement>('.fit-box').forEach((box) =>
    box.querySelectorAll<HTMLElement>('[data-mask]').forEach((ln, i) => {
      const inner = ln.firstElementChild as HTMLElement | null;
      if (inner) inner.style.transitionDelay = `${(i % 3) * 80}ms`;
    })
  );
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }),
    { rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ── heavy motion (GSAP + ScrollTrigger + Lenis) on idle, never for reduced motion ── */
if (!reduce) {
  const load = () => import('./motion').then((m) => m.start()).catch(() => {});
  const idle = (window as any).requestIdleCallback || ((cb: () => void) => setTimeout(cb, 200));
  if (document.readyState === 'complete') idle(load);
  else window.addEventListener('load', () => idle(load), { once: true });
}
