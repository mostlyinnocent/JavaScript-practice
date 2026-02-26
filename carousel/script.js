const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nxt-btn");
const prevBtn = document.getElementById("prev-btn");
const bg = document.querySelector(".main-bg");

let slides = [];
let locked = false;
let index = 1;
let step = 0;
const GAP = 10;

// Initializing at first load
window.addEventListener("load", init);

function init() {
    setupClones();
    calcStep();
    jumpToIndex(index, false);
    updateBackground();
    attachEvents();
}


// Creating clones of the first slide and last slide
function setupClones() {
    slides = Array.from(slider.children);

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);

    slides = Array.from(slider.children);
}

// Calculating step
function calcStep() {
    const rect = slides[0].getBoundingClientRect();
    step = Math.round(rect.width + GAP);
}

function moveToIndex(i) {
    slider.style.transition = "transform 0.3s ease";
    slider.style.transform = `translateX(-${step * i}px)`;
}

// Animation setter for each step
function jumpToIndex(i, animate = false) {
    slider.style.transition = animate ? "transform 0.3s ease" : "none";
    slider.style.transform = `translateX(-${step * i}px)`;
}

// Button functionality
function next() {
    if(locked) return;
    locked = true;
    index++;
    moveToIndex(index);
}

function prev() {
    if(locked) return;
    locked = true;
    index--;
    moveToIndex(index);
}

// Updating background image with the image on the first slide
function updateBackground() {
    const imgs = slider.querySelectorAll("img");
    const src = imgs[index].src;
    bg.style.backgroundImage = `url(${src})`;
}

// Attaching listeners
function attachEvents() {
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    slider.addEventListener("transitionend", teleport);

    window.addEventListener("resize", () => {
        calcStep();
        jumpToIndex(index, false);
    });
}

// Handles the teleport from the last and first slide clone creating an 'infinite' loop illusion
function teleport() {
    const total = slides.length;

    if(index===0){
        index = total - 2;
        jumpToIndex(index, false);
    }

    if(index===total - 1){
        index = 1;
        jumpToIndex(index, false);
    }

    updateBackground();
    locked = false;
}