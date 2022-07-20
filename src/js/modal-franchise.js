(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts__button--white'),
    closeModalBtn: document.querySelector('.franchise-modal__close-btn'),
    modal: document.querySelector('.franchise-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll'),
      refs.modal.classList.toggle('is-hidden');
  }
})();
