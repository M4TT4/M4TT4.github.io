/*
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

*/


// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Handle Modal Open and Close
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('open'); // Add 'open' class to trigger fade-in animation

  const content = modal.querySelector('.modal-content');
  content.style.top = `${100 + Math.random() * 200}px`; // Randomize position
  content.style.left = `${100 + Math.random() * 200}px`;
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('open'); // Remove 'open' class to trigger fade-out animation

  // Hide modal after fade-out completes (wait for the transition to finish)
  setTimeout(() => {
    modal.classList.add('hidden'); // Hide the modal after fading out
  }, 300); // Match the duration of the fade-out transition
}

// Dragging Modals
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let currentModal = null;
const modalPositions = {};

// Initialize draggable functionality for each modal
document.querySelectorAll('.modal-content').forEach(modal => {
  modal.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('close-button')) return;

    isDragging = true;
    currentModal = modal;

    const rect = modal.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    modal.style.transition = 'none'; // Disable transition during drag
  });
});

// Handle mouse movement for dragging
document.addEventListener('mousemove', function (e) {
  if (!isDragging || !currentModal) return;

  const left = e.clientX - offsetX;
  const top = e.clientY - offsetY;

  currentModal.style.left = `${left}px`;
  currentModal.style.top = `${top}px`;
  currentModal.style.transform = 'none';

  modalPositions[currentModal.id] = { left, top };
});

// End dragging on mouse up
document.addEventListener('mouseup', function () {
  if (isDragging && currentModal) {
    currentModal.style.transition = 'left 0.2s ease, top 0.2s ease'; // Smooth out the transition
  }
  isDragging = false;
  currentModal = null;
});

  