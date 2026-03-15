(function () {
  'use strict';

  function initScrollReveal() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.animate-in').forEach(function (el) {
      if (!el.closest('.hero')) {
        observer.observe(el);
      }
    });

    // Keep reference alive to prevent GC
    window.__scrollRevealObserver = observer;
  }

  // Use both DOMContentLoaded AND a fallback
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
