(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-closes]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", addModal);
    refs.closeModalBtn.addEventListener("click", delModal);
  
    function addModal() {
      refs.modal.classList.remove("is-hidden");
    }
    function delModal() {
      refs.modal.classList.add("is-hidden");
    }
  })();

 
  