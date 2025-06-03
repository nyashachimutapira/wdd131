// Mobile Navigation Toggle
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const iconMenu = navToggle.querySelector('.icon-menu');
const iconClose = navToggle.querySelector('.icon-close');

navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible') === 'true';
    if (isVisible) {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
    } else {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        iconMenu.style.display = 'none';
        iconClose.style.display = 'block';
    }
});

// Update Copyright Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for anchor links (optional, basic version)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Ensure it's not just a placeholder link like "#"
    if (anchor.getAttribute('href').length > 1) {
        anchor.addEventListener('click', function (e) {
            // Check if the link is for a page section or a placeholder for another page
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement && targetId.startsWith('#') && targetId.length > 1 && !targetId.includes('-page')) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // If mobile nav is open, close it
                if (primaryNav.getAttribute('data-visible') === 'true') {
                    primaryNav.setAttribute('data-visible', 'false');
                    navToggle.setAttribute('aria-expanded', 'false');
                    iconMenu.style.display = 'block';
                    iconClose.style.display = 'none';
                }
            }
            // For links like "#events-calendar-page", let default behavior (or future routing) handle it
        });
    }
});