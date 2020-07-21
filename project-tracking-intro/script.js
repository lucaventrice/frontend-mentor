const hamburger = document.getElementById('hambugrer');
const {
  body
} = document;

hamburger.addEventListener('click', e => {
  body.classList.toggle('show-nav');
})