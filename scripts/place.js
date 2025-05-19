// scripts/place.js

document.addEventListener('DOMContentLoaded', function() {
    // Update footer year
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Update last modified date
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Weather Data (Static values as per instructions)
    const temperatureCelsius = parseFloat(document.getElementById('temperature').textContent); // 10°C
    const windSpeedKmh = parseFloat(document.getElementById('windspeed').textContent); // 15 km/h

    const windChillSpan = document.getElementById('windchill');

    // Function to calculate Wind Chill in Celsius
    // Wind Chill = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
    // T = Air Temperature in Celsius
    // V = Wind Speed in km/h
    function calculateWindChill(tempCelsius, speedKmh) {
        return (13.12 + (0.6215 * tempCelsius) - (11.37 * Math.pow(speedKmh, 0.16)) + (0.3965 * tempCelsius * Math.pow(speedKmh, 0.16))).toFixed(1);
    }

    // Check conditions for calculating wind chill
    // Metric: Temperature <= 10 °C AND Wind speed > 4.8 km/h
    if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
        const windChillValue = calculateWindChill(temperatureCelsius, windSpeedKmh);
        if (windChillSpan) {
            windChillSpan.textContent = `${windChillValue}°C`;
        }
    } else {
        if (windChillSpan) {
            windChillSpan.textContent = "N/A";
        }
    }
});