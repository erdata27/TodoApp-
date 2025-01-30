function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${taskInput.value} <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Delete</button>`;

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
}