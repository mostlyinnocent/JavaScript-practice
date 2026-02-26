const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => {
            t.classList.remove("active");
        });
        contents.forEach(c => {
            c.classList.remove("active")
        });

        tab.classList.add("active");

        const target = tab.dataset.tab;
        document
        .querySelector(`[data-content="${target}"]`)
        .classList.add("active");
    });
});