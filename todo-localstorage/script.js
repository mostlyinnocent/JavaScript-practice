const taskList = document.querySelector(".task-list");
const taskTemplate = document.getElementById("task-template");
const addTaskBtn = document.getElementById("add-task-btn");


//localStorage setup
const STORAGE_KEY = "todo-tasks";

//fetches tasks from localStorage
function getTasks(){
    //debug log
    console.log("getTasks() called");
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

//Saves tasks in the local storage
function saveTasks(tasks){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    //debug log
    console.log("saveTasks() called");
}

let tasks = getTasks();

//Function to render tasks in the browser
function renderTasks(){
    let newInput = null;

    const fragments = tasks.map(task=> {
        const clone = taskTemplate.content.cloneNode(true); 
        const li = clone.querySelector(".task");

        li.dataset.id = task.id;

        const checkbox = clone.querySelector(".checkbox");
        const input = clone.querySelector(".task-input");

        checkbox.checked = task.completed;
        input.value = task.text;

        if (task.isNew){
            newInput = input;
            input.removeAttribute("readonly");
            delete task.isNew;
        }

        return clone;
    }); 

    taskList.replaceChildren(...fragments);

    if(newInput){
        newInput.focus();
        newInput.select();
    }
}

//Pushes tasks to localStorage by calling helpers
function addTasks(){

    //Task object
    tasks.push({
        id: crypto.randomUUID(),
        text: "",
        completed: false,
        isNew: true
    });

    saveTasks(tasks);
    renderTasks();
    updateProgress();
    console.log("addTasks() called");

}

//Add task button functionality
addTaskBtn.addEventListener("click", () => {addTasks()});

//Save on enter
taskList.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const input = e.target.closest("[data-task-input]");
    if (!input) return;

    e.preventDefault();

    const li = input.closest("[data-task]");
    if(!li) return;

    const task = tasks.find(t => t.id === li.dataset.id);

    task.text = input.value.trim();

    input.setAttribute("readonly", true);

    saveTasks(tasks);
});

function markComplete(taskId, checked, li) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    task.completed = checked;


    const input = li.querySelector("[data-task-input]");
    input.classList.toggle("completed", checked);

    saveTasks(tasks);
    updateProgress();
}

function editTask(li) {
    const input = li.querySelector("[data-task-input]");
    input.removeAttribute("readonly");
    input.focus();
    input.select();
    updateProgress();
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id!== taskId); //Filters out the deleted collection and provides a new array

    saveTasks(tasks);
    renderTasks();
    updateProgress();
    console.log("Task deleted"); //DEBUG log
    return;
}

//Listener for checkbox
taskList.addEventListener("change", (e)=> {
    const toggleBtn = e.target.closest("[data-task-toggle]");
    if (!toggleBtn) return;


    const li = toggleBtn.closest("[data-task]");
    if(!li) return

    markComplete(li.dataset.id, toggleBtn.checked, li);
});


//Listeners for edit and delete buttons

taskList.addEventListener("click", (e) => {

    const editBtn = e.target.closest("[data-task-edit]");
    if(editBtn) {
        const li = editBtn.closest("[data-task]");
        if( !li ) return;

        editTask(li);
        return;
    }

    const deleteBtn = e.target.closest("[data-task-delete]");
    if(deleteBtn){
        const li = deleteBtn.closest("[data-task]");
        if(!li) return;

        deleteTask(li.dataset.id);
        return;
    }
});

// Hides progress bar
const circle = document.querySelector(".progress-circle");
const label = document.querySelector(".progress-rate");

const radius = 30;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function updateProgress() {
    const total = tasks.length;
    const done = tasks.filter(t => t.completed).length;

    const percent = total === 0?0 : done / total;

    const offset = circumference - percent * circumference;

    circle.style.strokeDashoffset = offset;
    label.textContent = Math.round(percent * 100) + "%";
}

renderTasks();
updateProgress();
