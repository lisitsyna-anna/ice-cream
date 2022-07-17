(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[modal-about-open]'),
    closeModalBtn: document.querySelector('[modal-about-close]'),
    modal: document.querySelector('[modal-about]'),
  };

  console.log(refs.openModalBtn);

  refs.openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
