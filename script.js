document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });



  function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
  }
  
  function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
  }