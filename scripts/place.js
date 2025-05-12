document.addEventListener("DOMContentLoaded", function() {
    const temperature = 10; // static temperature in °C
    const windSpeed = 5; // static wind speed in km/h

    function calculateWindChill(temp, speed) {
        return (temp <= 10 && speed > 4.8) 
            ? Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)) 
            : "N/A";
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").textContent = windChill;

    // Set current year and last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("last-modified").textContent = document.lastModified;

    // Display temperature and wind speed
    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("wind-speed").textContent = `${windSpeed} km/h`;

    // Greeting based on time of day
    const greetingElement = document.createElement('p');
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning! Enjoy your day in Zimbabwe!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon! Hope you're having a great day!";
    } else {
        greeting = "Good evening! Relax and enjoy the beautiful sights of Zimbabwe!";
    }

    greetingElement.textContent = greeting;
    document.body.insertBefore(greetingElement, document.querySelector("footer"));
});