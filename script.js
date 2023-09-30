const inputEl = document.getElementById("searchInput");
const submitBtn = document.getElementById("submitBtn");
const errorEl = document.getElementById("error");

//variables
let userInput = "";
const weatherUrl = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather";
const apiKey = "54055a5eafmsh4468d9cbc165f03p1d3892jsn062d952dc838";

//external request
const fetchWeather = () => {
  const isZip = !isNaN(+userInput);
  fetch(`${weatherUrl}?${isZip ? `zip=${userInput}` : `city=${userInput}`}`, {
    headers: {
      "X-RapidAPI-Key": apiKey,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    })
    .then((data) => {
      localStorage.setItem("weatherData", JSON.stringify(data));
      inputEl.value = "";
      window.location.href = "https://windmate.netlify.app/info.html";
    })
    .catch((error) => {
      errorEl.style.display = "block";
      errorEl.textContent = error.message;
      setTimeout(() => {
        closeErr();
      }, 2000);
    });
};

//functions
const searchInfo = (e) => {
  userInput = e.target.value;
};

const getWeather = () => {
  if (!userInput) {
    errorEl.style.display = "block";
    errorEl.textContent = "Please enter a City name or Zip Code!";
    setTimeout(() => {
      closeErr();
    }, 2000);
    return;
  }
  fetchWeather();
};

const closeErr = () => {
  errorEl.style.display = "none";
  errorEl.textContent = "";
};

//event listeners
inputEl.addEventListener("change", searchInfo);
submitBtn.addEventListener("click", getWeather);
