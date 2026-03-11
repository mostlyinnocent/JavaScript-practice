const API_KEY = "e25d0502347e4bf8bbf133506261003";


export async function fetchWeatherData(city){
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes`;
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(Error) {
        console.error(Error);
        return null
    }
}
