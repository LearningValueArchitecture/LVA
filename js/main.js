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

  // Tab switching with ARIA support
  var tabLists = document.querySelectorAll('[role="tablist"]');

  tabLists.forEach(function (tabList) {
    var tabs = tabList.querySelectorAll('[role="tab"]');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTab(tab, tabs);
      });

      // Keyboard navigation (WAI-ARIA tabs pattern)
      tab.addEventListener('keydown', function (e) {
        var tabArray = Array.from(tabs);
        var index = tabArray.indexOf(tab);
        var newTab;

        if (e.key === 'ArrowRight') {
          newTab = tabArray[(index + 1) % tabArray.length];
        } else if (e.key === 'ArrowLeft') {
          newTab = tabArray[(index - 1 + tabArray.length) % tabArray.length];
        } else if (e.key === 'Home') {
          newTab = tabArray[0];
        } else if (e.key === 'End') {
          newTab = tabArray[tabArray.length - 1];
        }

        if (newTab) {
          e.preventDefault();
          activateTab(newTab, tabs);
          newTab.focus();
        }
      });
    });
  });

  function activateTab(activeTab, allTabs) {
    var tabId = activeTab.getAttribute('data-tab');
    var parent = activeTab.closest('.section') || document;

    // Deactivate all tabs
    allTabs.forEach(function (t) {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    // Activate clicked tab
    activeTab.classList.add('is-active');
    activeTab.setAttribute('aria-selected', 'true');
    activeTab.setAttribute('tabindex', '0');

    // Hide all panels
    parent.querySelectorAll('[role="tabpanel"]').forEach(function (panel) {
      panel.classList.remove('is-active');
    });

    // Show target panel
    var target = document.getElementById('tab-' + tabId);
    if (target) {
      target.classList.add('is-active');
    }
  }

  // Fallback: tab-pills without role="tab" (legacy support)
  var legacyPills = document.querySelectorAll('.tab-pill:not([role="tab"])');
  legacyPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var tabId = this.getAttribute('data-tab');
      var parent = this.closest('.section') || document;

      var group = this.closest('.tabs');
      if (group) {
        group.querySelectorAll('.tab-pill').forEach(function (p) {
          p.classList.remove('is-active');
        });
      }

      this.classList.add('is-active');

      parent.querySelectorAll('.tab-panel').forEach(function (panel) {
        panel.classList.remove('is-active');
      });

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
