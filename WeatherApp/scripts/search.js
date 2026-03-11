import { fetchWeatherData } from "./api.js";
import { renderWeatherInfo } from "./weather.js";


const form = document.getElementById("searchField");
const city = document.getElementById("city-search");

export function initSearch(){
    form.addEventListener("submit", async (e)=>{
        e.preventDefault();
        try{
            const cityName = city.value; 
            const weatherData = await fetchWeatherData(cityName);
            renderWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
        }
    });
}
