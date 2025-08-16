document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      // Simple client-side validation; replace with your form handler or serverless function.
      const required = ['name', 'email', 'message'];
      for (const id of required) {
        const el = form.querySelector('#' + id);
        if (!el || !el.value.trim()) {
          e.preventDefault();
          alert('Please fill out the required fields.');
          el?.focus();
          return;
        }
      }
      // If using a provider like Formspree, set the form.action to their endpoint.
    });
  }
});
