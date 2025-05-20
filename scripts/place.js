// scripts/place.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Footer Information ---
    try {
        const currentYearSpan = document.getElementById('currentyear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        } else {
            console.warn("Element with ID 'currentyear' not found for footer.");
        }

        const lastModifiedSpan = document.getElementById('lastmodified');
        if (lastModifiedSpan) {
            lastModifiedSpan.textContent = document.lastModified;
        } else {
            console.warn("Element with ID 'lastmodified' not found for footer.");
        }
    } catch (e) {
        console.error("Error setting footer information:", e);
    }

    // --- Wind Chill Calculation ---
    try {
        const temperatureSpan = document.getElementById('temperature-value');
        const windSpeedSpan = document.getElementById('windspeed-value');
        const windChillOutputSpan = document.getElementById('windchill-value');

        // Ensure all elements exist before proceeding
        if (temperatureSpan && windSpeedSpan && windChillOutputSpan) {
            const temperature = parseFloat(temperatureSpan.textContent);
            const windSpeed = parseFloat(windSpeedSpan.textContent);

            // Function to calculate Wind Chill in Celsius
            // Formula: Wind Chill = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
            // T = Air Temperature in Celsius
            // V = Wind Speed in km/h
            function calculateWindChill(tempCelsius, speedKmh) {
                // Check if inputs are valid numbers
                if (isNaN(tempCelsius) || isNaN(speedKmh)) {
                    return "N/A"; // Or handle error appropriately
                }
                return (13.12 + (0.6215 * tempCelsius) - (11.37 * Math.pow(speedKmh, 0.16)) + (0.3965 * tempCelsius * Math.pow(speedKmh, 0.16))).toFixed(1);
            }

            // Conditions for viable wind chill calculation (Metric):
            // Temperature <= 10 °C AND Wind speed > 4.8 km/h
            if (!isNaN(temperature) && !isNaN(windSpeed) && temperature <= 10 && windSpeed > 4.8) {
                const windChillValue = calculateWindChill(temperature, windSpeed);
                windChillOutputSpan.textContent = `${windChillValue}°C`;
            } else {
                windChillOutputSpan.textContent = "N/A";
            }
        } else {
            if (!temperatureSpan) console.warn("Temperature span 'temperature-value' not found.");
            if (!windSpeedSpan) console.warn("Windspeed span 'windspeed-value' not found.");
            if (!windChillOutputSpan) console.warn("Windchill span 'windchill-value' not found.");
        }
    } catch (e) {
        console.error("Error calculating wind chill:", e);
        const windChillOutputSpan = document.getElementById('windchill-value');
        if (windChillOutputSpan) {
            windChillOutputSpan.textContent = "Error";
        }
    }
});