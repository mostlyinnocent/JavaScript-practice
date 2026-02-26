const button = document.getElementById("arrow-button");
const menu = document.querySelector(".dropdown-menu");
const wrapper = document.getElementById("wrapper");
const label = document.querySelector(".label");
const langMenu = document.getElementById("langMenu");
const header = document.getElementById("header");

const langs = document.querySelectorAll(".dropdown-item");

let selectedIndex = -1;
let focusedIndex = -1;
let isOpen = false;

button.addEventListener("click", () => {
    buttonToggle();
});

function buttonToggle(){
    if(isOpen){
        closeMenu();
        isOpen = false;
    } else {
        openMenu();
        isOpen = true;
    }
}

document.addEventListener("click", (e) => {
    if(!wrapper.contains(e.target)) {
        closeMenu();
    }
});

function openMenu() {
    menu.classList.add("open");
    button.setAttribute("aria-expanded", "true");
    button.classList.add("focus");
    focusedIndex = selectedIndex >= 0 ? selectedIndex : 0;
    updateFocus();
}

function closeMenu() {
    menu.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("focus");
    header.classList.remove("focused");
}

langs.forEach((item, index) => {
    item.addEventListener("click", () => {
        handleSelection(index);
    });
});

function handleSelection(index){
    selectedIndex = index;

    label.textContent = langs[index].textContent;
    langs.forEach(lang => {
        lang.classList.remove("selected");
        lang.setAttribute("aria-selected", "false");
    });
    langs[index].setAttribute("aria-selected", "true");
    langs[index].classList.add("selected");

    // closeMenu()
}

function arrowMoveUp() {
    focusedIndex--;
    let nextIndex = focusedIndex + 1;
    if(nextIndex < 0 ) {
        focusedIndex = langs.length - 1;
    }
    updateFocus();
}

function arrowMoveDown() {
    focusedIndex++;
    let nextIndex = focusedIndex - 1;
    if(nextIndex > langs.length - 1) {
        focusedIndex = 0;
    }
    updateFocus();
}

header.addEventListener("keydown", (event) => {
    if(event.key === "ArrowUp"){
        arrowMoveUp();
        event.preventDefault();
    } else if(event.key === "ArrowDown") {
        arrowMoveDown();
        event.preventDefault();
    }
})

function updateFocus() {
    langs.forEach(lang => lang.classList.remove("focused"));
    langs[focusedIndex].classList.add("focused");
}

header.addEventListener("keydown", (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        if(isOpen){
            handleSelection(focusedIndex);
        } else {
            openMenu();
        }
    }
})

header.addEventListener("keydown", (event) => {
    if(event.key === 'Enter' || event.key === " ") {
        event.preventDefault();
        openMenu();
    } else if(event.key === "Escape") {
        closeMenu();
    }
});



handleSelection(selectedIndex);