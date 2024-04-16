const apiKey = "25c2a14fb4c7c2e917ec11c5edad6779";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon");
const checkweather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Log the weather condition to identify any issues
    console.log("Weather Condition:", data.weather[0].main);

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "img/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "img/clear.png";
        break;
      case "Mist":
        weatherIcon.src = "img/mist.png";
        break;
      case "Rain":
        weatherIcon.src = "img/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "img/drizzle.png";
        break;
      case "Snow":
        weatherIcon.src = "img/snow.png";
        break;
      case "Haze":
        weatherIcon.src = "img/haze.png";
        break;
      default:
        console.log("Unknown weather condition:", data.weather[0].main);
        break;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
