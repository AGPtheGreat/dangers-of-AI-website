const overlay = document.getElementById('overlay');

document.addEventListener('mousemove', (e) => {
  overlay.style.top = `${e.clientY}px`;
  overlay.style.left = `${e.clientX}px`;
});
