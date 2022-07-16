(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.modal-buy-open'),
    closeModalBtn: document.querySelector('.modal-buy-close'),
    modal: document.querySelector('.modal-buy'),
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
