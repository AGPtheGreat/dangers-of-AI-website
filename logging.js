// Basic form validation example (client-side)
document.getElementById('aiLogForm').addEventListener('submit', function (e) {
    const inputs = this.querySelectorAll('input, textarea, select');
    for (let input of inputs) {
      if (!input.checkValidity()) {
        alert('Please fill out all required fields correctly.');
        e.preventDefault();
        return;
      }
    }
  });