(() => {
  const refs = {
    openMenuBtn: document.querySelector('.products-description-btn-second'),
    closeMenuBtn: document.querySelector('.products-description-btn-second'),
    menu: document.querySelector('.products__overlay-second'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
