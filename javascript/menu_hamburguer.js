// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuHamburguer = document.getElementById('menu-hamburguer');

    menuButton.addEventListener('click', function() {
        if (menuHamburguer.style.display === 'flex') {
            menuHamburguer.style.display = 'none';
        } else {
            menuHamburguer.style.display = 'flex';
        }
    });

    // Optional: Hide menu on link click (for mobile UX)
    menuHamburguer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                menuHamburguer.style.display = 'none';
            }
        });
    });
});