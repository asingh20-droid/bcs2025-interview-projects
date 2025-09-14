const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const progressCircle = document.querySelector(".progress-ring__circle");
const progressText = document.getElementById("progressText");

const radius = 45;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;

function updateCounter() {
  const totalTasks = taskList.children.length;
  let doneTasks = 0;

  taskList.querySelectorAll("input[type='checkbox']").forEach(cb => {
    if (cb.checked) doneTasks++;
  });

  const pendingTasks = totalTasks - doneTasks;
  taskCounter.textContent = `${pendingTasks} pending, ${doneTasks} done`;

  // ✅ Update Progress Circle
  const percent = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
  progressText.textContent = `${percent}%`;
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  const label = document.createElement("label");
  label.className = "custom-checkbox";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";

  label.appendChild(checkbox);
  label.appendChild(checkmark);

  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  checkbox.addEventListener("change", () => {
    span.classList.toggle("done", checkbox.checked);
    updateCounter();
  });

  taskLeft.appendChild(label);
  taskLeft.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCounter();
  });

  li.appendChild(taskLeft);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  updateCounter();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

updateCounter();


// Expand when clicked
taskInput.addEventListener("focus", () => {
  taskInput.classList.add("expanded");
});

// Shrink back only when you click outside the input *and* button
document.addEventListener("click", (e) => {
  if (e.target.id !== "taskInput" && e.target.id !== "addBtn") {
    taskInput.classList.remove("expanded");
  }
});

