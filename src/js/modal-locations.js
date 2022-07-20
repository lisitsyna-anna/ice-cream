(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-loc-modal-open]"),
    closeModalBtn: document.querySelector("[data-loc-modal-close]"),
    modal: document.querySelector("[data-loc-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
  }
})();