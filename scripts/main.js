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

  /* Scroll reveal + hero convergence, GSAP if available and motion is allowed */
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || typeof gsap === 'undefined') {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    gsap.registerPlugin(ScrollTrigger);

    revealEls.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => el.classList.add('is-visible'),
      });
    });

    /* Homepage signature moment: the two worlds converge on load */
    const heroLeft = document.querySelector('[data-hero-left]');
    const heroRight = document.querySelector('[data-hero-right]');
    const heroLine = document.querySelector('[data-hero-line]');
    const heroTitle = document.querySelector('[data-hero-title]');
    if (heroLeft && heroRight) {
      gsap.set(heroLeft, { xPercent: -6, opacity: 0 });
      gsap.set(heroRight, { xPercent: 6, opacity: 0 });
      if (heroLine) gsap.set(heroLine, { scaleY: 0 });
      if (heroTitle) gsap.set(heroTitle, { y: 18, opacity: 0 });

      const tl = gsap.timeline({ defaults: { duration: 1.1, ease: 'power3.out' } });
      tl.to(heroLeft, { xPercent: 0, opacity: 1 })
        .to(heroRight, { xPercent: 0, opacity: 1 }, '<')
        .to(heroLine, { scaleY: 1, duration: 0.9 }, '-=0.5')
        .to(heroTitle, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5');
    }
  }
});
