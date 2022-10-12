// Capturing the values of our inputs
const searchInput = document.querySelector('[type= "text"]');
const searchBtn = document.querySelector(".search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const icon = document.querySelector(".icon");
const feelsLike = document.querySelector(".feels-like");
const status = document.querySelector(".status");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const fetchWeather = (value) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=2a69896588c8845808e54efd72332c3f&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            city.innerHTML = `Weather in ${data.name}, ${data.sys.country}`;
            temp.innerHTML = `${data.main.temp}&#8451;`;
            feelsLike.innerHTML = `Feels like: ${data.main.feels_like}&#8451; `;
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            status.innerHTML = data.weather[0].description;
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
            wind.innerHTML = `Wind: ${data.wind.speed} KM/H`;
        })
        .catch((error) => {
            searchInput.innerHTML = error;
        });
};

searchBtn.onclick = () => {
    fetchWeather(searchInput.value);
    searchInput.value = "";
};
