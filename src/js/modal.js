(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.modal-open'),
    closeModalBtn: document.querySelector('.modal-close'),
    modal: document.querySelector('.modal'),
  };

  console.log(refs.openModalBtn);

  refs.openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // document.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
