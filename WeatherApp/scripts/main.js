import { fetchWeatherData } from "./api.js";
import { initSearch } from "./search.js";
import { renderWeatherInfo } from "./weather.js";



const DEF_CITY = "Silchar";
document.addEventListener("DOMContentLoaded", async() => {
    const data = await fetchWeatherData(DEF_CITY);
    renderWeatherInfo(data);
});

initSearch();