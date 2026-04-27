// Unique API key and base URL obtained from OpenWaterMap
const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Mine function to fetch database data
async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    if (cityInput === "") {
        alert("Please enter a city name!");
        return;
    }

    try {
        // Calling the op (units=metric given to get the temperature in Celsius)
        const response = await fetch(`${API_URL}?q=${cityInput}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        // Updating the final elements with the OP data
        document.getElementById("city").innerText = data.name;
        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°c";
        document.getElementById("condition").innerText = data.weather[0].main;

    } catch (error) {
        alert("City not found! Please check the spelling.");
        console.error(error);
    }
}

// Pressing the 'Enter' key while the search box is in focus should perform a search
document.getElementById("cityInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});