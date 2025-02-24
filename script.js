const dropinShelf = document.getElementById('dropin-shelf');

// Add event listeners for drag and drop
dropinShelf.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropinShelf.classList.add('dragover');
});

dropinShelf.addEventListener('dragleave', () => {
  dropinShelf.classList.remove('dragover');
});

dropinShelf.addEventListener('drop', (e) => {
  e.preventDefault();
  dropinShelf.classList.remove('dragover');

  // Handle dropped files
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    alert(`You dropped ${files.length} file(s).`);
    // You can process the files here (e.g., display them in the UI)
  }
});
