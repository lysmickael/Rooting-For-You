/* ========================================
   ROOTING FOR YOU - JavaScript Commun
   ======================================== */

// Toggle burger menu
function toggleMenu() {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.side-menu');
    const overlay = document.querySelector('.menu-overlay');
    
    if (burger && menu && overlay) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Fermer le menu au clic sur un lien
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.side-menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const burger = document.querySelector('.burger-menu');
            const menu = document.querySelector('.side-menu');
            const overlay = document.querySelector('.menu-overlay');
            
            if (burger && menu && overlay) {
                burger.classList.remove('active');
                menu.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
