// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Drag and modal functionality
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let currentModal = null;
const modalPositions = {};

// Make modals draggable
document.querySelectorAll('[data-draggable]').forEach(modal => {
  modal.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('close-button')) return;

    isDragging = true;
    currentModal = modal;

    const rect = modal.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    modal.style.transition = 'none';
  });
});

document.addEventListener('mousemove', function (e) {
  if (!isDragging || !currentModal) return;

  const left = e.clientX - offsetX;
  const top = e.clientY - offsetY;

  currentModal.style.left = `${left}px`;
  currentModal.style.top = `${top}px`;
  currentModal.style.transform = 'none';

  modalPositions[currentModal.id] = { left, top };
});

document.addEventListener('mouseup', function () {
  if (isDragging && currentModal) {
    currentModal.style.transition = 'left 0.2s ease, top 0.2s ease';
  }
  isDragging = false;
  currentModal = null;
});

// Modal open function
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');

  const content = modal.querySelector('[data-draggable]');

  if (modalPositions[content.id]) {
    const { left, top } = modalPositions[content.id];
    content.style.left = `${left}px`;
    content.style.top = `${top}px`;
  } else {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = content.offsetWidth;
    const height = content.offsetHeight;

    const left = (vw - width) / 2;
    const top = (vh - height) / 2;

    content.style.left = `${left}px`;
    content.style.top = `${top}px`;
  }
}

// Modal close function
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

  