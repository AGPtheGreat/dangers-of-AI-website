// Dark/Light Mode Toggle Function
function toggleMode() {
    document.body.classList.toggle('light');
}


// Function to save mode preference for users
function toggleMode() {
  document.body.classList.toggle('light');

  // Save the current mode to localStorage
  if (document.body.classList.contains('light')) {
    localStorage.setItem('mode', 'light');
  } else {
    localStorage.setItem('mode', 'dark');
  }
}

// Check if the user has a saved mode in localStorage when the page loads
window.onload = function() {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'light') {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
};