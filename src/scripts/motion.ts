// Structural motion (DESIGN.md v2 § Motion). Loaded on idle by site.ts; never with reduced motion.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function start() {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('motion');

  // Smooth scroll only for fine pointers on wide screens (touch keeps native momentum).
  if (window.matchMedia('(pointer: fine) and (min-width: 901px)').matches) {
    const lenis = new Lenis({ lerp: 0.11 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href')!;
        const t = id.length > 1 ? document.querySelector<HTMLElement>(id) : null;
        if (t) {
          e.preventDefault();
          lenis.scrollTo(t, { offset: -88 });
        }
      })
    );
    // Pause smooth scroll while a modal dialog is open.
    const dlg = document.querySelector('dialog');
    if (dlg) new MutationObserver(() => (dlg.open ? lenis.stop() : lenis.start())).observe(dlg, { attributes: true, attributeFilter: ['open'] });
  }

  // Hero still drifts down as the page leaves it.
  document.querySelectorAll<HTMLElement>('[data-hero-still]').forEach((el) => {
    gsap.to(el, { yPercent: 9, ease: 'none', scrollTrigger: { trigger: el.closest('[data-hero]') || el, start: 'top top', end: 'bottom top', scrub: true } });
  });

  // SIGNATURE: depth dolly. World and screens move at different depths.
  const k = window.innerWidth <= 900 ? 0.45 : 1; // shorter travel on phones
  gsap.utils.toArray<HTMLElement>('[data-dolly]').forEach((p) => {
    const st = { trigger: p, start: 'top bottom', end: 'bottom top', scrub: 0.6 };
    const img = p.querySelector('.mf-world img');
    if (img) gsap.fromTo(img, { scale: 1.16, yPercent: -3 }, { scale: 1, yPercent: 3, ease: 'none', scrollTrigger: st });
    p.querySelectorAll<HTMLElement>('.mf-scr').forEach((s) => {
      const d = parseFloat(s.dataset.depth || '1');
      gsap.fromTo(s, { y: 80 * d * k }, { y: -40 * d * k, ease: 'none', scrollTrigger: st });
    });
  });
  gsap.utils.toArray<HTMLElement>('[data-dolly-bg]').forEach((p) => {
    const img = p.querySelector('img');
    if (img) gsap.fromTo(img, { scale: 1.14 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  });

  // Paragraph that lights up word by word as it crosses the screen.
  gsap.utils.toArray<HTMLElement>('[data-light]').forEach((box) => {
    const words = Array.from(box.querySelectorAll<HTMLElement>('.lw'));
    if (!words.length) return;
    box.classList.add('light-ready');
    ScrollTrigger.create({
      trigger: box,
      start: 'top 78%',
      end: 'bottom 52%',
      scrub: true,
      onUpdate: (self) => {
        const n = Math.round(self.progress * words.length);
        words.forEach((w, i) => w.classList.toggle('lit', i < n));
      }
    });
  });

  window.addEventListener('fit:done', () => ScrollTrigger.refresh());
}
