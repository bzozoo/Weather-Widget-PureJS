const KELVIN = 273;
const key = "114a39f2791e27bc8bf67c776b796c3b";
const weather = {
  temperature: {
    value: 18,
    unit: "celsius"
  },
  description: "few clouds",
  iconId: "01d",
  city: "London",
  country: "GB"
};

const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

function displayWeather() {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png">`;

  tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;

  descElement.innerHTML = weather.description;

  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature) {
  return temperature * (9 / 5) + 32;
}

tempElement.addEventListener("click", function() {
  if (weather.temperature.value === undefined) return;
  if (weather.temperature.unit === "celsius") {
    let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);
    tempElement.innerHTML = `${fahrenheit} ° <span>C</span>`;
    weather.temperature.unit = "fahrenheit";
  } else {
    tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
    weather.temperature.unit = "celsius";
  }
});
displayWeather();

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.getElementsByClassName.display = "block";
  notificationElement.innerHTML =
    "<p>Browser does not support Geolocation.</p>";
}

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

function showError() {
  notificationElement.getElementsByClassName.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
