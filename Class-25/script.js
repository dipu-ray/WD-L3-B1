// Create a function for clothing depends on weather

// Get Outfit
function getOutfit(temperature) {
    if (temperature >= 30) {
        return "T-shirt and shorts";
    } else if (temperature >= 20) {
        return "Light jacket";
    } else if (temperature >= 10) {
        return "Warm sweater";
    } else {
        return "Heavy coat";
    }
}

// Get Weather
function getWeatherAdvice(temperature, isRaining) {
    let message = "Wear: " + getOutfit(temperature);
    if (isRaining == true) {
        message = message + "\nDon't forget an umbrella!";
    } else {
        message = message + "\nDon't need an umbrella!";
    } return message;
}

// Output
document.write(getWeatherAdvice(30, true) + "<br>");
document.write(getWeatherAdvice(20, false) + "<br>");
document.write(getWeatherAdvice(10, true) + "<br>");
document.write(getWeatherAdvice(0, false) + "<br>");