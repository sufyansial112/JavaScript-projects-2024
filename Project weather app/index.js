const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "06fb9cb1a49b661086472822d21d5bc6";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-img");

async function weatherApp(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  }

  const data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clear") {
    weatherImg.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherImg.src = "./images/mist.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherImg.src = "./images/clouds.png";
  }
}

searchBtn.addEventListener("click", function () {
  weatherApp(searchInput.value);
});
