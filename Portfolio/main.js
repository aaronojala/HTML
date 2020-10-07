const backToButton = document.getElementById('back-to-top');
const width = window.matchMedia('(max-width: 576px)');

// mobile menu

const mobileMenu = () => {
  const menu = document.querySelector('ul');

  menu.classList.toggle('mobilemenu');
};

// back to top button

window.onscroll = () => scrollCheck();

const scrollCheck = () =>
  document.body.scrollTop > 200 ||
  (document.documentElement.scrollTop > 200 && !width.matches)
    ? (backToButton.style.display = 'flex')
    : (backToButton.style.display = 'none');

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
