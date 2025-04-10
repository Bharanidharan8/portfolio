function handleImage(inputId, displayId, isBackground = false) {
  const input = document.getElementById(inputId);
  const display = document.getElementById(displayId);

  input.addEventListener('change', () => {
    const file = input.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isBackground) {
          display.style.backgroundImage = `url(${e.target.result})`;
        } else {
          display.src = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  });
}

handleImage('heroInput', 'heroDisplay', true);
handleImage('profileInput', 'profileDisplay');
handleImage('logoInput', 'logoDisplay');
handleImage('projectInput', 'projectDisplay');
handleImage('skillInput', 'skillDisplay');
handleImage('clientInput', 'clientDisplay');

document.getElementById('doneBtn').addEventListener('click', () => {
  document.getElementById('uploadPanel').style.display = 'none';

  // Set text values
  document.getElementById('nameDisplay').textContent = document.getElementById('nameInput').value || "Welcome to My Portfolio";
  document.getElementById('projectDesc').textContent = document.getElementById('projectText').value;
  document.getElementById('skillDesc').textContent = document.getElementById('skillText').value;
  document.getElementById('clientDesc').textContent = document.getElementById('clientText').value;
});

// Re-editing images
document.querySelectorAll('.img-wrapper').forEach(wrapper => {
  const inputId = wrapper.getAttribute('data-input');
  const isBg = wrapper.getAttribute('data-type') === 'bg';
  wrapper.addEventListener('click', () => {
    const input = document.getElementById(inputId);
    input.click();
  });
});
