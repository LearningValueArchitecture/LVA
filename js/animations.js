document.addEventListener('DOMContentLoaded', function () {

  // IntersectionObserver for scroll animations
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px'
    }
  );

  // Observe all .animate-in elements OUTSIDE the hero
  document.querySelectorAll('.animate-in').forEach(function (el) {
    // Skip hero children — they use CSS keyframe animation on load
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });

});
