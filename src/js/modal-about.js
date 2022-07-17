(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-about-open]'),
    closeModalBtn: document.querySelector('[modal-about-close]'),
    modal: document.querySelector('[modal-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
