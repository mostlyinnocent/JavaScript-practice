const userTabs = document.querySelectorAll('.user-tab');
const contextMenu = document.getElementById('context-menu');
const TAB_WIDTH = 90;
const GAP = 30;
const STEP = TAB_WIDTH + GAP;
const MENU_WIDTH = 320;
const TRACK_WIDTH = 700;

userTabs.forEach((tab, index) => {
    tab.addEventListener('click', ()=>{
        const isFocused = tab.classList.contains("focus");
        userTabs.forEach(t => t.classList.remove("focus"));
        if(!isFocused){
            focusTab(tab);
            openContextMenu();
            alignMenuWithTab(index);
        } else {
            closeContextMenu();
        }
    });
});

function focusTab(t){
    t.classList.add("focus");
}

function openContextMenu(){
    contextMenu.classList.add("open");
    
}

function closeContextMenu(){
    contextMenu.classList.remove("open");
}

function alignMenuWithTab(i){
    let left = i * STEP;
    const maxLeft = TRACK_WIDTH - MENU_WIDTH;
    if(left > maxLeft){
        left = maxLeft;
    }
    contextMenu.style.left = left + "px";
    contextMenu.style.top = "10px";
}

