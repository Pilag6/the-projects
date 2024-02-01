const apiKey = "11e94ab942a5ebae73d6de6b4b8de110";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const form = document.getElementById("search");
const weatherDiv = document.querySelector(".weather");

//functions
async function fetchWeatherByCity(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

function actualWeatherRender(data) {
  console.log(data.weather[0].main);
  weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <div class="weather-info">
            <div class="weather-icon">
                <img src="./utilities/images/${
                  data.weather[0].main
                }.png" alt = "" />
            </div>
            <div>
                <p class="temp">${Math.round(data.main.temp)}°C</p>
                <div class="temperatures">
                    <p><strong>Min:</strong> ${Math.round(
                      data.main.temp_min
                    )}°C</p>
                    <p><strong>Max:</strong> ${Math.round(
                      data.main.temp_max
                    )}°C</p>
                </div>
            </div>
            <div class="wind-humidity">
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind speed:</strong> ${data.wind.speed} km/h</p>
            </div>
        </div>

    `;
}

// event listener
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const data = await fetchWeatherByCity(url + city);
  console.log(data);
  if (parseInt(data.cod) < 400) {
    actualWeatherRender(data);
  } else {
    weatherDiv.innerHTML = `<h2 class="error">${data.message}</h2>`;
  }
});
