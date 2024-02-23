const cancel = document.getElementById("cancel");

const taskInput = document.getElementById("task");

if (taskInput.value = "") {
    cancel.style.opacity = "0"
}

taskInput.addEventListener("input", () => {

taskInput.value !== "" ? cancel.style.opacity = "1" : cancel.style.opacity = "0";

})

cancel.addEventListener("click", () => {
    taskInput.value = "";
    cancel.style.opacity = "0";
})

document.getElementById("body-1").addEventListener("click", () => {
    document.getElementById("check-1").checked ? document.getElementById("check-1").checked = false : document.getElementById("check-1").checked = true;
})

function createTask() {
    var val = taskInput.value;

    const archive = document.getElementById("archive");

    const newTask = document.createElement("div");
    newTask.classList.add("task-body");

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.classList.add("task-check");

    const detail = document.createElement("span");
    detail.innerHTML = val;
    detail.classList.add("detail");

    newTask.appendChild(check);
    newTask.appendChild(detail);

    archive.appendChild(newTask);
}

document.getElementById("add").addEventListener("click", () => {
    if (taskInput.value !== "") {
        createTask();
    }

    taskInput.value = "";
});


/* document.getElementById("add").addEventListener(click, () => {
    createTask()
}) */