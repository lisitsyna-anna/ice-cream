(() => {
  const refs = {
    openModalBtn: document.querySelector("[loc-modal-open]"),
    closeModalBtn: document.querySelector("[loc-modal-close]"),
    modal: document.querySelector("[loc-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
  }
})();