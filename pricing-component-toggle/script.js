const toggle = document.getElementById('toggle');
const flex = document.getElementById('flex');

toggle.addEventListener('change', (e) => {
  flex.classList.toggle('show-monthly');
})