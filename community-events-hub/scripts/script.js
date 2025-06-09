// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile navigation toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

mobileNavToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible') === 'true';
    primaryNav.setAttribute('data-visible', !isVisible);
    mobileNavToggle.setAttribute('aria-expanded', !isVisible);
});

// Close mobile menu when clicking on links
const navLinks = document.querySelectorAll('.primary-navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
    });
});

// Form submission handling
const eventForm = document.getElementById('event-form');
if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for submitting your event! We will review it and add it to our calendar soon.');
        eventForm.reset();
    });
}