const textInput = document.getElementById("text-input-area");
const boldBtn = document.getElementById("bold-btn");
const italicBtn = document.getElementById("italic-btn");
const colorPicker = document.getElementById("color-picker");
const fontSelector = document.getElementById("font-selector");
const fontSizeInput = document.getElementById("font-size-selector");
const alignBtns = document.querySelectorAll(".align");


const alignments = ["left", "center", "right"];

alignBtns.forEach((btn, index) => {
    btn.addEventListener("click", ()=>{
        alignText(index);
        alignBtns.forEach(b => {
            b.classList.remove("focus");
        })
        focusSelectedAlignment(btn);
    })
})


fontSelector.addEventListener('change', ()=>{
    selectFontFace();
})

fontSizeInput.addEventListener('input', ()=>{
    changeFontSize();
})

boldBtn.addEventListener('click', ()=>{
    boldFont();
});

italicBtn.addEventListener('click', ()=>{
    italicFont();
});

colorPicker.addEventListener("input", ()=>{
    selectFontColor();
})

function selectFontFace(){
    textInput.style.fontFamily = fontSelector.value;
}

function boldFont() {
    boldBtn.classList.toggle("focus");
    textInput.classList.toggle("bold");
}

function italicFont(){
    italicBtn.classList.toggle("focus");
    textInput.classList.toggle("italic");
}


function selectFontColor(){
    const selectedColor = colorPicker.value;
    textInput.style.color = selectedColor;
}

function changeFontSize(){
    const size = fontSizeInput.value;
    textInput.style.fontSize = size + "px";
}

function alignText(id){
    textInput.style.textAlign = alignments[id];
}

function focusSelectedAlignment(b){
    b.classList.add("focus");
}