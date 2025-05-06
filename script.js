document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });



  function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
  }
  
  function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
  }
  

  function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
    const content = modal.querySelector('.modal-content');
    content.style.top = `${100 + Math.random() * 200}px`;
    content.style.left = `${100 + Math.random() * 200}px`;
  }