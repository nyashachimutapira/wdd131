const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product names in the select element
const productSelect = document.getElementById('product-name');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Update year and last modified date in footer
document.getElementById("year").textContent = new Date().getFullYear();
const lastModified = new Date(document.lastModified).toLocaleDateString();
document.getElementById("last-modified").textContent = lastModified;

// Review counter functionality for review.html
if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.getElementById('review-count').textContent = reviewCount;
}