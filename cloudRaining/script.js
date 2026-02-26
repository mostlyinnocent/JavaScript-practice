const rainArea = document.querySelector(".rain-area");

function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    const x = Math.random() * rainArea.clientWidth;
    drop.style.left = `${x}px`;

    const duration = Math.random() * 0.7 + 0.6;
    drop.style.animationDuration = `${duration}s`;

    rainArea.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, duration * 1000);
}

setInterval(createDrop, 30);
