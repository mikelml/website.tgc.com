document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.navbar-toggle');
    const navMenu = document.getElementById('navbar-menu');
    toggleBtn.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});