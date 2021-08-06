const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav-bar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
