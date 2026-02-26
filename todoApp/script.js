const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-items");
const progressBar = document.querySelector(".progress-bar");

const tasks = [];

addBtn.addEventListener("click", addTask);

function addTask () {
    const text = taskInput.value.trim();

    if(text === "") return;
    tasks.push({text: text, completed: false});

    renderTask();

    taskInput.value = "";

    track_tasks();
};

function renderTask() {

    taskList.innerHTML = "";

    tasks.sort((a, b) => a.completed - b.completed);

    tasks.forEach((task, index) => {

        const li = document.createElement("li");
        li.classList.add("task");

        //line-through if cheked
        if(task.completed) {
            li.classList.add("completed");
        }

        // checkbox 
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check-box");
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTask();
            track_tasks();
        })

        const p = document.createElement("p");
        p.classList.add("task-text");
        p.textContent = task.text;

        const controls = document.createElement("div");
        controls.classList.add("controls");

        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn");

        const delIcon = document.createElement("img");
        delIcon.src = "icons/delete.png"
        delIcon.classList.add("delete-icon")

        delBtn.addEventListener("click", () => {
            tasks.splice(index, 1); //deleteing from tasks array
            renderTask();
            track_tasks();
        })

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");

        const editIcon = document.createElement("img");
        editIcon.src = "icons/edit.png"
        editIcon.classList.add("edit-icon");

        //edit button functionality
        editBtn.addEventListener("click", () => {
            newTask = prompt("Edit task:", task.text).trim();
            if(newTask !== null && newTask.trim() !== ""){
                task.text = newTask.trim();
                renderTask();
                track_tasks();
            }
        });

        delBtn.appendChild(delIcon);
        editBtn.appendChild(editIcon);

        controls.appendChild(delBtn);
        controls.appendChild(editBtn)

        li.appendChild(controls);
        li.appendChild(checkbox);
        li.appendChild(p);
        taskList.appendChild(li);
    });

};

function track_tasks(){
    const taskDone = document.querySelector(".task-completed");
    const taskCounter = document.querySelector(".task-counter");

    const completedTask = tasks.filter(task=>task.completed).length;
    const totalTasks = tasks.length;


    taskDone.textContent = completedTask;
    taskCounter.textContent = totalTasks;
    

    let progress = 0;

    if(totalTasks > 0) {
        progress = (completedTask / totalTasks) * 100;
    }

    progressBar.style.width = `${progress}%`;
};