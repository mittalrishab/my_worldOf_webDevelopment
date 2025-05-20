const apiKey = "d3370e5e9a9d786fa4bbd528e90bb865";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#search-input");
const searchBtn = document.querySelector(".search-icon");
const weatherIconDiv = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        const data = await response.json();
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temperature").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind-speed").innerHTML = data.wind.speed + "km/hr";
        
        // Set weather icon
        let iconSrc = '';
        const weatherMain = data.weather[0].main;
        if (weatherMain === "Clouds") {
            iconSrc = 'weather_assets/clouds.png';
        } else if (weatherMain === "Clear") {
            iconSrc = 'weather_assets/clear.png';
        } else if (weatherMain === "Rain") {
            iconSrc = 'weather_assets/rain.png';
        } else if (weatherMain === "Drizzle") {
            iconSrc = 'weather_assets/drizzle.png';
        } else if (weatherMain === "Mist") {
            iconSrc = 'weather_assets/mist.png';
        } else if (weatherMain === "Snow") {
            iconSrc = 'weather_assets/snow.png';
        } else if (weatherMain === "Wind") {
            iconSrc = 'weather_assets/wind.png';
        } else {
            iconSrc = '';
        }
        // If you use <img> inside .weather-icon
        weatherIconDiv.innerHTML = iconSrc ? `<img src="${iconSrc}" alt="${weatherMain}" style="height:100%;width:100%;" />` : '';

        document.querySelector(".error").style.display = "none";
    }
}

// Trigger search on click
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optionally: allow search on Enter key
searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
