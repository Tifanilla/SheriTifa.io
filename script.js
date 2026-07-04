const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
  navToggle.classList.toggle('active');
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thanks! Your message has been sent.');
    form.reset();
  });
}
