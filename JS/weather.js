// const weatherLocation = {
//     name: "cambridge , MA",
//     latitude: 42.3736,
//     longitude: -71.1097
// };

// const fallbackWeather = {
//     temperature: 68,
//     condition: "Partly Cloudy",
//     feelsLike: 64,
//     humidity: "42%",
//     uvIndex: "Low 2",
//     airQuality: "Good",
//     forecast: [
//         { day: "Mon", icon: "sunny", degree: 72 },
//         { day: "Tue", icon: "cloud", degree: 72 },
//         { day: "Wed", icon: "rainy", degree: 72 },
//         { day: "Thu", icon: "partly_cloudy_day", degree: 72 },
//         { day: "Fri", icon: "sunny", degree: 72 }
//     ]
// };

// const weatherCodes = {
//     0: { condition: "Clear Sky", icon: "sunny" },
//     1: { condition: "Mainly Clear", icon: "sunny" },
//     2: { condition: "Partly Cloudy", icon: "partly_cloudy_day" },
//     3: { condition: "Cloudy", icon: "cloud" },
//     45: { condition: "Fog", icon: "foggy" },
//     48: { condition: "Fog", icon: "foggy" },
//     51: { condition: "Light Drizzle", icon: "rainy_light" },
//     53: { condition: "Drizzle", icon: "rainy" },
//     55: { condition: "Heavy Drizzle", icon: "rainy_heavy" },
//     61: { condition: "Light Rain", icon: "rainy_light" },
//     63: { condition: "Rain", icon: "rainy" },
//     65: { condition: "Heavy Rain", icon: "rainy_heavy" },
//     71: { condition: "Light Snow", icon: "weather_snowy" },
//     73: { condition: "Snow", icon: "weather_snowy" },
//     75: { condition: "Heavy Snow", icon: "weather_snowy" },
//     80: { condition: "Rain Showers", icon: "rainy" },
//     81: { condition: "Rain Showers", icon: "rainy" },
//     82: { condition: "Heavy Showers", icon: "rainy_heavy" },
//     95: { condition: "Thunderstorm", icon: "thunderstorm" }
// };

// function getWeatherCodeDetails(code) {
//     return weatherCodes[code] || { condition: "Weather", icon: "partly_cloudy_day" };
// }

// function getWeekday(dateValue) {
//     return new Date(dateValue).toLocaleDateString("en-US", {
//         weekday: "short"
//     });
// }

// function getUvText(uvIndex) {
//     if (uvIndex <= 2) {
//         return `Low ${Math.round(uvIndex)}`;
//     }

//     if (uvIndex <= 5) {
//         return `Moderate ${Math.round(uvIndex)}`;
//     }

//     if (uvIndex <= 7) {
//         return `High ${Math.round(uvIndex)}`;
//     }

//     return `Very High ${Math.round(uvIndex)}`;
// }

// function getAirQualityText(aqi) {
//     if (aqi <= 50) {
//         return "Good";
//     }

//     if (aqi <= 100) {
//         return "Moderate";
//     }

//     if (aqi <= 150) {
//         return "Unhealthy";
//     }

//     return "Poor";
// }

// function renderWeather(weather) {
//     const locationName = document.querySelector(".weathersectionslocation p span:last-child");
//     const currentTemperature = document.querySelector(".weathersectionsdatas > h2");
//     const currentCondition = document.querySelector(".weathersectiondata > h3");
//     const feelsLike = document.querySelector(".weathersectiondata > p");
//     const forecastRows = document.querySelectorAll(".autualweatherdata tr");
//     const weatherDataCards = document.querySelectorAll(".weatherdata");

//     if (locationName) {
//         locationName.textContent = weatherLocation.name;
//     }

//     if (currentTemperature) {
//         currentTemperature.innerHTML = `${weather.temperature} &deg;`;
//     }

//     if (currentCondition) {
//         currentCondition.textContent = weather.condition;
//     }

//     if (feelsLike) {
//         feelsLike.innerHTML = `Feels like ${weather.feelsLike} &deg;`;
//     }

//     forecastRows.forEach((row, index) => {
//         const forecastDay = weather.forecast[index];

//         if (!forecastDay) {
//             return;
//         }

//         row.children[0].textContent = forecastDay.day;
//         row.children[1].querySelector(".material-symbols-outlined").textContent = forecastDay.icon;
//         row.children[2].innerHTML = `${forecastDay.degree} &deg;`;
//     });

//     if (weatherDataCards[0]) {
//         weatherDataCards[0].querySelector("h2").textContent = weather.humidity;
//     }

//     if (weatherDataCards[1]) {
//         weatherDataCards[1].querySelector("h2").textContent = weather.uvIndex;
//     }

//     if (weatherDataCards[2]) {
//         weatherDataCards[2].querySelector("h2").textContent = weather.airQuality;
//     }
// }

// async function getWeather() {
//     const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
//     weatherUrl.search = new URLSearchParams({
//         latitude: weatherLocation.latitude,
//         longitude: weatherLocation.longitude,
//         current: "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code",
//         daily: "weather_code,temperature_2m_max,uv_index_max",
//         temperature_unit: "fahrenheit",
//         timezone: "auto",
//         forecast_days: 5
//     });

//     const airUrl = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
//     airUrl.search = new URLSearchParams({
//         latitude: weatherLocation.latitude,
//         longitude: weatherLocation.longitude,
//         current: "us_aqi",
//         timezone: "auto"
//     });

//     const [weatherResponse, airResponse] = await Promise.all([
//         fetch(weatherUrl),
//         fetch(airUrl)
//     ]);

//     if (!weatherResponse.ok || !airResponse.ok) {
//         throw new Error("Weather API request failed");
//     }

//     const weatherData = await weatherResponse.json();
//     const airData = await airResponse.json();
//     const currentDetails = getWeatherCodeDetails(weatherData.current.weather_code);

//     return {
//         temperature: Math.round(weatherData.current.temperature_2m),
//         condition: currentDetails.condition,
//         feelsLike: Math.round(weatherData.current.apparent_temperature),
//         humidity: `${Math.round(weatherData.current.relative_humidity_2m)}%`,
//         uvIndex: getUvText(weatherData.daily.uv_index_max[0]),
//         airQuality: getAirQualityText(airData.current.us_aqi),
//         forecast: weatherData.daily.time.map((dateValue, index) => {
//             const forecastDetails = getWeatherCodeDetails(weatherData.daily.weather_code[index]);

//             return {
//                 day: getWeekday(dateValue),
//                 icon: forecastDetails.icon,
//                 degree: Math.round(weatherData.daily.temperature_2m_max[index])
//             };
//         })
//     };
// }

// document.addEventListener("DOMContentLoaded", async () => {
//     renderWeather(fallbackWeather);

//     try {
//         const weather = await getWeather();
//         renderWeather(weather);
//     } catch (error) {
//         console.error(error);
//     }
// });

// my own code
// selct the each elements
const searchInput = document.querySelector("#searchcity");
const searchBtn = document.querySelector("#searchbtn");
const API_KEY = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key;
const cityName = document.querySelector("#cityname")
const temperature = document.querySelector("#temperature")
const weatherType = document.querySelector("#weathertype")
const feelsLike = document.querySelector("#feelslike")
const humidity = document.querySelector("#humidity")
const pressure = document.querySelector("#pressure")
const visibility = document.querySelector("#visibility")
async function getWeatherDat(city) {
try {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("city Not Found")
    }
    const data = await response.json()
    // console.log(data)
    cityName.textContent = data.name;

    temperature.textContent = Math.round(data.main.temp) + "°C";

    weatherType.textContent = data.weather[0].description;

    feelsLike.textContent = `Feels Like ${Math.round(data.main.feels_like)}°C`;

    humidity.textContent = data.main.humidity + "%";
    pressure.textContent = data.main.pressure
} 
catch (error)
{
    console.log(error);
    alert("City is not found");
}
}
getWeatherDat("chennai");
searchBtn.addEventListener("click", (event) => {
    const city = searchInput.value.trim()
    if(city!== ""){
        getWeatherDat(city) 
    }
    else{
        alert("Enter the City Name ")
    }
});
searchInput.addEventListener("keydown", (event) => {
    const city = searchInput.value.trim()
    if(event.key ==="Enter"){
        if(city!== ""){
        getWeatherDat(city) 
    }
    else{
        alert("Enter the City Name ")
    }
    }
}); 


