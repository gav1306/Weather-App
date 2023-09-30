const tempEl = document.getElementById("temp");
const fahrenheitCheckEl = document.getElementById("fahrenheitCheck");
const tempSymbolEl = document.getElementById("tempSymbol");
const temperatureEl = document.getElementById("temperature");
const minTempEl = document.getElementById("minTemp");
const maxTempEl = document.getElementById("maxTemp");
const windEl = document.getElementById("wind");
const windSpeedEl = document.getElementById("windSpeed");
const feelsLikeEl = document.getElementById("feelsLike");
const windDegreeEl = document.getElementById("windDegree");
const humidityEl = document.getElementById("humidity");
const humidity2El = document.getElementById("humidity2");
const sunriseEl = document.getElementById("sunrise");
const sunsetEl = document.getElementById("sunset");

const weatherData = JSON.parse(localStorage.getItem("weatherData"));

if (!weatherData) {
  window.location.href = "https://windmate.netlify.app/index.html";
}

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const changeTempType = (e) => {
  if (e.target.checked) {
    tempEl.textContent = celsiusToFahrenheit(weatherData.temp);
    tempSymbolEl.innerHTML = "&#x2109;";
    return;
  }
  tempEl.textContent = weatherData.temp;
  tempSymbolEl.innerHTML = "&#8451;";
};

const setData = () => {
  tempEl.textContent = weatherData.temp;
  temperatureEl.textContent = weatherData.temp;
  minTempEl.textContent = weatherData.min_temp;
  maxTempEl.textContent = weatherData.max_temp;
  windEl.textContent = weatherData.wind_speed;
  windSpeedEl.textContent = weatherData.wind_speed;
  feelsLikeEl.textContent = weatherData.feels_like;
  windDegreeEl.textContent = weatherData.wind_degrees;
  humidityEl.textContent = weatherData.humidity;
  humidity2El.textContent = weatherData.humidity;
  sunriseEl.textContent = weatherData.sunrise;
  sunsetEl.textContent = weatherData.sunset;
};

fahrenheitCheckEl.addEventListener("change", changeTempType);

setData();
