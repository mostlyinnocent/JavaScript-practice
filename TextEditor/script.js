const textInput = document.getElementById("text-input-area");
const boldBtn = document.getElementById("bold-btn");
const italicBtn = document.getElementById("italic-btn");
const colorPicker = document.getElementById("color-picker");


boldBtn.addEventListener('click', ()=>{
    boldFont();
});

italicBtn.addEventListener('click', ()=>{
    italicFont();
});

colorPicker.addEventListener("input", ()=>{
    changeFontColor();
})

function boldFont() {
    boldBtn.classList.toggle("focus");
    textInput.classList.toggle("bold");
}

function italicFont(){
    italicBtn.classList.toggle("focus");
    textInput.classList.toggle("italic");
}


function changeFontColor(){
    const selectedColor = colorPicker.value;
    textInput.style.color = selectedColor;
}