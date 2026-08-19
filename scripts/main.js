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

  /* Google-Bewertungen: horizontal scroll-snap track, nudged by arrow buttons */
  document.querySelectorAll('[data-reviews-track]').forEach((track) => {
    const prevBtn = track.parentElement.querySelector('[data-reviews-prev]');
    const nextBtn = track.parentElement.querySelector('[data-reviews-next]');
    const scrollByCard = (dir) => {
      const card = track.querySelector('[data-review-card]');
      const distance = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
      track.scrollBy({ left: dir * distance, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    prevBtn?.addEventListener('click', () => scrollByCard(-1));
    nextBtn?.addEventListener('click', () => scrollByCard(1));
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
