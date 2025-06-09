// js/form.js - JavaScript for the Product Review Form

// Product Array
const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
];

// Function to populate product options
function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; // Use product ID for the value
            option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); // Capitalize first letter
            productNameSelect.appendChild(option);
        });
    }
}

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();

    // The main site script.js should handle the footer year, but if not, you can add it here too.
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});