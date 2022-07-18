(() => {
  const refs = {
    openMenuBtn: document.querySelector('.products-description-btn-first'),
    closeMenuBtn: document.querySelector('.products-description-btn-first'),
    menu: document.querySelector('.products__overlay-first'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
