const textArea = document.querySelector(".text-input-area");
const clearBtn = document.querySelector(".clear-input");
const outputField = document.querySelector(".output-field");

textArea.addEventListener("input", ()=> {
    const count = textArea.value.length;
    outputField.textContent = count;
});

clearBtn.addEventListener("click", () =>{
    outputField.textContent = "";
    textArea.value = "";
});