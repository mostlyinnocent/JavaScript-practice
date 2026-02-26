const exprDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

let exprStr = "";
let resStr = "";

const numBtns = document.querySelectorAll(".num-btn");
const fncBtns = document.querySelectorAll(".fnc-btn");

function updateDisplay(){
    exprDisplay.textContent = exprStr;
    resultDisplay.textContent = resStr || "00";
}

function isOperator(char) {
    return ["+", "-", "*", "/", "%"].includes(char);
}

numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if(value==="." && exprStr.endsWith(".")) return;

        exprStr += value;
        updateDisplay();
    });
});

fncBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if(value==="clr"){
            exprStr="";
            resStr="";
        }

        else if(value=== "del"){
            exprStr = exprStr.slice(0, -1);
        }

        else if (value=== "="){
            if(exprStr === "") return;

            try {
                resStr = eval(exprStr);
            } catch {
                resStr = "Error"
            }
        }

        else {
            if (exprStr == "") return;

            const lastChar = exprStr.slice(-1);
            if(isOperator(lastChar)) return;

            exprStr += value;
        }

        updateDisplay();
    });
});