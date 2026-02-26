const resetBtn = document.querySelector(".reset-btn");
const resetIcon = document.querySelector(".reset-icon");
const displayText = document.querySelector(".display-text");
const increaseBtn = document.querySelector(".increment-btn");
const decreaseBtn = document.querySelector(".decrement-btn");

let count = 0;

function updateDisplay(){
    displayText.textContent = count;
}

increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
})

decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
})

resetBtn.addEventListener("click", ()=>{
    resetIcon.classList.remove("spin");
    resetIcon.getBoundingClientRect();
    resetIcon.classList.add("spin");
    
    count = 0;
    updateDisplay();
});