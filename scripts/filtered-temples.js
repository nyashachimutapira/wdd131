// filtered-temples.js

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add 3 more temple objects here:
  {
    templeName: "Bern Switzerland",
    location: "Münchenbuchsee, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784290-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1574508-wallpaper.jpg"
  },
  {
    templeName: "Kinshasa Democratic Republic of the Congo",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000, // Example area, verify if needed
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/400x250/kinshasa-temple-lds-2-JUT_3541.jpg"
  }
];

const galleryGrid = document.querySelector(".temple-gallery-grid");
const pageTitleElement = document.getElementById("page-title");
const navLinks = document.querySelectorAll(".nav-link");

// Function to create a single temple card
function createTempleCard(temple) {
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; // Native lazy loading

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("temple-card-info");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    infoDiv.appendChild(name);
    infoDiv.appendChild(location);
    infoDiv.appendChild(dedicated);
    infoDiv.appendChild(area);

    card.appendChild(img);
    card.appendChild(infoDiv);

    return card;
}

// Function to display temples in the grid
function displayTemples(templeList) {
    galleryGrid.innerHTML = ""; // Clear previous temples
    templeList.forEach(temple => {
        galleryGrid.appendChild(createTempleCard(temple));
    });
}

// Function to update active navigation link
function updateActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

// Event Listeners for Navigation
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        updateActiveNavLink(this); // 'this' refers to the clicked link

        const filterType = this.id;
        let filteredTemples = [];
        let newTitle = "";

        switch (filterType) {
            case "nav-old":
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
                newTitle = "Old Temples (Dedicated before 1900)";
                break;
            case "nav-new":
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
                newTitle = "New Temples (Dedicated after 2000)";
                break;
            case "nav-large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                newTitle = "Large Temples (Over 90,000 sq ft)";
                break;
            case "nav-small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                newTitle = "Small Temples (Under 10,000 sq ft)";
                break;
            case "nav-home":
            default:
                filteredTemples = temples;
                newTitle = "All Temples";
                break;
        }
        pageTitleElement.textContent = newTitle;
        displayTemples(filteredTemples);
    });
});

// Footer: Current Year and Last Modified Date
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Initial display of all temples
    displayTemples(temples);
    // Ensure "Home" is active on page load
    document.getElementById("nav-home").classList.add("active");
});