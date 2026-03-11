import { fetchWeather } from "./api.js";

async function test() {
    const data = await fetchWeather("Tokyo");
    console.log(data);
}

test();