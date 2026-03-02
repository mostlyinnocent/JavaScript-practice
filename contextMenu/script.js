const userTabs = document.querySelectorAll('.user-tab');
const contextMenu = document.getElementById('context-menu');

userTabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const isFocused = tab.classList.contains("focus");
        userTabs.forEach(t => t.classList.remove("focus"));
        if(!isFocused){
            focusTab(tab);
            openContextMenu();
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

