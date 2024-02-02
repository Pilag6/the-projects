const apiKey = "11e94ab942a5ebae73d6de6b4b8de110";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const form = document.getElementById("search");
const weatherDiv = document.querySelector(".weather");
const container = document.querySelector(".container");
const body = document.querySelector("body");

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
/* sys
: 
{type: 2, id: 2075535, country: 'GB', sunrise: 1706859501, sunset: 1706892588} 

Show me the date in this format: 07:00 or 16:35*/
function actualWeatherRender(data) {
    console.log(data.weather[0].main);
    weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <h3>(${data.sys.country})</h3>
        <div class="weather-info">
        
            <div class="weather-icon">
                <img src="./utilities/images/${
                    data.weather[0].main
                }.png" alt = "" />
            </div>

            
            <div class="temp-container">
                <p class="temp">${Math.round(data.main.temp)}°C</p>

                <div class="temperatures">
                    <p class="temperatures-minmax"><strong>Min:</strong> ${Math.round(
                        data.main.temp_min
                    )}°C</p>
                    <p class="temperatures-minmax"><strong>Max:</strong> ${Math.round(
                        data.main.temp_max
                    )}°C</p>
                </div>
            </div>

            <div class="weather-sunrise-sunset">
                <p><strong>Sunrise:</strong> ${new Date(
                    data.sys.sunrise * 1000
                ).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}</p>
                <p><strong>Sunset:</strong> ${new Date(
                    data.sys.sunset * 1000
                ).toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}</p>
                
            </div>
            <div class="wind-humidity">
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind speed:</strong> ${data.wind.speed} km/h</p>
            </div>
        </div>

    `;

    if (data.weather[0].main === "Clouds") {
        body.style.backgroundImage = "url('https://bit.ly/49gxZeC')";
    } else if (data.weather[0].main === "Clear") {
        body.style.backgroundImage = "url('https://bit.ly/42quDnh')";
    } else if (data.weather[0].main === "Rain") {
        body.style.backgroundImage = "url('https://bit.ly/4bjmqFl')";
    } else if (data.weather[0].main === "Snow") {
        body.style.backgroundImage = "url('https://bit.ly/3w18Gik')";
    } else if (data.weather[0].main === "Mist") {
        body.style.backgroundImage = "url('https://bit.ly/49kfAha')";
    }
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
