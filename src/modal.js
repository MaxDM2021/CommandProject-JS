(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", addModal);
    refs.closeModalBtn.addEventListener("click", delModal);
  
    function addModal(e) {
      e.preventDefault();
      refs.modal.classList.remove("is-hidden");
    }
    function delModal(e) {
      e.preventDefault();
      refs.modal.classList.add("is-hidden");
    }
  })();

 
  