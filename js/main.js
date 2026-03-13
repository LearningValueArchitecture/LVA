document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Tab switching
  var tabPills = document.querySelectorAll('.tab-pill');

  tabPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var tabId = this.getAttribute('data-tab');
      var parent = this.closest('.section') || document;

      // Deactivate all pills in this group
      var group = this.closest('.tabs');
      if (group) {
        group.querySelectorAll('.tab-pill').forEach(function (p) {
          p.classList.remove('is-active');
        });
      }

      // Activate clicked pill
      this.classList.add('is-active');

      // Hide all panels in this section
      parent.querySelectorAll('.tab-panel').forEach(function (panel) {
        panel.classList.remove('is-active');
      });

      // Show target panel
      var target = document.getElementById('tab-' + tabId);
      if (target) {
        target.classList.add('is-active');
      }
    });
  });

  // Close mobile nav on link click
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

});
