const c_btn = document.getElementById('celsius-btn');
const f_btn = document.getElementById('fahrenheit-btn');
const tempEl = document.querySelector('[data-temp]');

export function setTemperatureFahrenheit(temp_f){
    c_btn.classList.remove("selected");
    tempEl.textContent = `${Math.round(temp_f)}°F`;
    f_btn.classList.add("selected");
}

export function setTemperatureCelsius(temp_c){
    f_btn.classList.remove("selected");
    tempEl.textContent = `${Math.round(temp_c)}°C`;
    c_btn.classList.add('selected');
}