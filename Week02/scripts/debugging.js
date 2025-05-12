const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area'); // Fixing the selector

let area = 0;
const PI = 3.14159; // Changed == to =

let radius = 10; // Changed const to let
area = PI * radius * radius;
radiusOutput.textContent = radius; // Use textContent
areaOutput.textContent = area; // Use textContent

radius = 20; // Now valid since radius is let
area = PI * radius * radius;
radiusOutput.textContent = radius; // Use textContent
areaOutput.textContent = area; // Use textContent