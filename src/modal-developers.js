(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-two]"),
      closeModalBtn: document.querySelector("[data-modal-close-two]"),
      modal: document.querySelector("[data-modal-two]"),
    };
  
    refs.openModalBtn.addEventListener("click", addModal);
    refs.closeModalBtn.addEventListener("click", delModal);
  
    function addModal(e) {
      e.preventDefault();
      refs.modal.classList.remove("is-hidden");
      
    }
    function delModal() {
      e.preventDefault();
      refs.modal.classList.add("is-hidden");
    }
  })();

 
  