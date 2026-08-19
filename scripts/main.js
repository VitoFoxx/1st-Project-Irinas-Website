// Perfect Line by Irina — shared interactivity

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile navigation toggle */
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navPanel = document.querySelector('[data-nav-panel]');
  if (navToggle && navPanel) {
    navToggle.addEventListener('click', () => {
      const open = navPanel.classList.toggle('flex');
      navPanel.classList.toggle('hidden');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navPanel.classList.add('hidden');
        navPanel.classList.remove('flex');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Header shadow after scroll */
  const header = document.querySelector('[data-site-header]');
  if (header) {
    const onScroll = () => header.classList.toggle('shadow-sm', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* FAQ accordion */
  document.querySelectorAll('[data-faq-item]').forEach((item) => {
    const trigger = item.querySelector('[data-faq-trigger]');
    const panel = item.querySelector('[data-faq-panel]');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';
      document.querySelectorAll('[data-faq-item]').forEach((other) => {
        other.setAttribute('data-open', 'false');
        other.querySelector('[data-faq-panel]').style.maxHeight = null;
        other.querySelector('[data-faq-trigger]').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.setAttribute('data-open', 'true');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* Testimonial slider */
  document.querySelectorAll('[data-testimonial-slider]').forEach((slider) => {
    const track = slider.querySelector('[data-testimonial-track]');
    const slides = Array.from(slider.querySelectorAll('[data-testimonial-slide]'));
    const prevBtn = slider.querySelector('[data-testimonial-prev]');
    const nextBtn = slider.querySelector('[data-testimonial-next]');
    const dots = Array.from(slider.querySelectorAll('[data-testimonial-dot]'));
    if (!track || slides.length < 2) return;
    let index = 0;
    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('bg-gold', i === index);
        dot.classList.toggle('bg-line/60', i !== index);
      });
    };
    prevBtn?.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
    });
    nextBtn?.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      update();
    });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        update();
      });
    });
  });

  /* Google-Bewertungen: native touch swipe on mobile (just overflow-x-auto).
     On mouse devices, scroll speed follows cursor position within the
     track — left half nudges left, right half nudges right, with a dead
     zone in the middle and faster scrolling toward the edges. */
  document.querySelectorAll('[data-reviews-track]').forEach((track) => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    if (!canHover || reduceMotion) return;

    const maxSpeed = 9; // px per animation frame at the very edge
    const deadZone = 0.15; // fraction of half-width that stays still
    let targetSpeed = 0;
    let rafId = null;

    const step = () => {
      if (targetSpeed !== 0) track.scrollLeft += targetSpeed;
      rafId = requestAnimationFrame(step);
    };

    track.addEventListener('mouseenter', () => {
      track.style.scrollSnapType = 'none'; // let continuous scrollLeft writes through
      if (rafId === null) rafId = requestAnimationFrame(step);
    });
    track.addEventListener('mousemove', (e) => {
      const rect = track.getBoundingClientRect();
      const center = rect.width / 2;
      const offset = (e.clientX - rect.left - center) / center; // -1..1
      const magnitude = Math.abs(offset);
      if (magnitude < deadZone) {
        targetSpeed = 0;
      } else {
        const normalized = (magnitude - deadZone) / (1 - deadZone);
        targetSpeed = Math.sign(offset) * normalized * maxSpeed;
      }
    });
    track.addEventListener('mouseleave', () => {
      targetSpeed = 0;
      track.style.scrollSnapType = ''; // restore CSS snap so the row settles on a card
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    });
  });

  /* Scroll reveal — native IntersectionObserver, no external library.
     Hero convergence animation lives entirely in CSS (see main.css). */
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -15% 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));
  }
});
