const button = document.getElementById('add-task-btn');
const taskContainer = document.getElementById("todo-col");
const columns = document.querySelectorAll(".column");
let draggedTask = null;

button.addEventListener('click', () =>{
    const task = renderTask();
    taskContainer.appendChild(task);
});

//Creates a clone of the template and renders the task on the browser
function renderTask() {

    const template = document.querySelector("#task-template");
    const clone = template.content.cloneNode(true);

    const task = clone.querySelector(".task");
    const input = clone.querySelector(".task-input");

    enableDrag(task);
    attachInputEvents(input);

    return task;
}

// Focus textarea on new task render
function handleFocus(inputElement){
    inputElement.removeAttribute("readonly");
    inputElement.focus();
}

function attachInputEvents(input){

    input.addEventListener('click', ()=>{
        focusOnClick(input);  
    })

    input.addEventListener('keydown', (e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            saveOnEnter(input);
        }
    });

    document.addEventListener('click', (e)=>{
        if(e.target!==input){
            handleBlur(input);
        }
    })
}

function saveOnEnter(input){
    input.setAttribute("readonly", true);
    input.blur();
}

function focusOnClick(input){
    input.removeAttribute("readonly");
    input.focus();
}

function handleBlur(input){
    input.setAttribute("readonly", true);
    input.blur();
}

function enableDrag(task){
    task.addEventListener("dragstart", () => {
        draggedTask = task;
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", ()=>{
        draggedTask = null;
        task.classList.remove("dragging");
    })
}

columns.forEach(column =>{
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("dragenter", ()=>{
        column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", ()=>{
        column.classList.remove("drag-over");
    });

    column.addEventListener("drop", () => {
        column.classList.remove("drag-over");
        
        if(draggedTask){
            column.appendChild(draggedTask);
        }
    });
});