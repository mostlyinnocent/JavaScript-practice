const tempEl = document.querySelector('[data-temp]');
const windEl = document.querySelector('[data-wind]');
const humidityEl = document.querySelector('[data-humidity]');
const cityEl = document.querySelector('[data-city]');
const dateTimeEl = document.querySelector('[data-datetime]');
const weatherIconEl = document.querySelector('[data-weatherIcon]');
const tempFeel = document.querySelector('[data-temp-feel]');
const forecastDays = document.querySelectorAll(".forecast-day");
const forecastLables = document.querySelectorAll('.forecast-day span:first-child');
const forecastTemps = document.querySelectorAll(".forecast-temp");
const forecastIcons = document.querySelectorAll(".forecast-weather-icon");


export function renderWeatherInfo(weatherData){
    const {name, localtime} = weatherData.location;
    const {temp_c, maxtemp_c ,temp_f, wind_kph, humidity, feelslike_c} = weatherData.current;
    const { condition: {icon} } = weatherData.current;

    cityEl.textContent = name;
    dateTimeEl.textContent = localtime;
    tempEl.textContent = `${Math.round(temp_c)}°C`;
    windEl.textContent = `${wind_kph} kmph`;
    humidityEl.textContent = `${humidity}%`;
    weatherIconEl.src = "https:" + icon;
    tempFeel.textContent = `${feelslike_c}°C`

    const forecast = weatherData.forecast.forecastday.slice(1);

    forecast.forEach((day, i) => {

        const date = new Date(day.date);

        const weekday = date.toLocaleDateString('en-us', {
            weekday: 'short'
        });

        const forecastTemp = Math.round(day.day.maxtemp_c);

        const icon = "https:" + day.day.condition.icon;

        forecastLables[i].textContent = weekday;
        forecastIcons[i].src = icon;
        forecastTemps[i].textContent = `${forecastTemp}°C`;

    });

}