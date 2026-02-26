const items = document.querySelectorAll(".faq-item");
console.log(items.values);

window.addEventListener("DOMContentLoaded", ()=> {
    const elements = document.querySelectorAll(".fade-up");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 150);
    })
})

items.forEach(item => {
    item.addEventListener('click', ()=> {
    handleToggle(item);    
    });
});

function openDropdown(item) {
    const answer = item.querySelector(".faq-answer");
    answer.style.maxHeight = answer.scrollHeight + "px";
    item.style.backgroundColor = "#f4f3ee"; 
    const arrow = item.querySelector(".arrow");
    arrow.classList.add("active");
}

function closeDropdown() {
    items.forEach(item => {
        const faqAns = item.querySelector(".faq-answer");
        faqAns.style.maxHeight = null;
        item.style.backgroundColor = "#bcd8fd6a";
        const arrow = item.querySelector(".arrow");
        arrow.classList.remove("active");
    });
}

function handleToggle(item){
    const answer = item.querySelector(".faq-answer");
    const isOpen = !!answer.style.maxHeight;

    closeDropdown();

    if(!isOpen){
        openDropdown(item);
    }
}
