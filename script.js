function loadProgress() {
  return (
    JSON.parse(localStorage.getItem("bmProgress")) ||
    Array(tasks.length).fill(false)
  );
}
function saveProgress(progress) {
  localStorage.setItem("bmProgress", JSON.stringify(progress));
}

function renderTasks() {
  const progress = loadProgress();
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "accordion-task";

    const header = document.createElement("div");
    header.className =
      "accordion-header" + (progress[index] ? " completed" : "");
    header.setAttribute("aria-expanded", "false");

    const span = document.createElement("span");
    span.textContent = `День ${index + 1}: ${task.title}`;

    const arrowBtn = document.createElement("button");
    arrowBtn.className = "toggle-btn";
    arrowBtn.innerHTML = "&#9654;";

    const completeBtn = document.createElement("button");
    completeBtn.className =
      "complete-btn" + (progress[index] ? " completed" : "");
    completeBtn.textContent = progress[index] ? "✓ Выполнено" : "Выполнить";
    completeBtn.disabled = progress[index] || false;

    completeBtn.addEventListener("click", (e) => {
      progress[index] = true;
      saveProgress(progress);
      renderTasks();
      e.stopPropagation();
    });

    const body = document.createElement("div");
    body.className = "accordion-body";
    body.innerHTML = task.details;
    body.style.display = "none";

    function toggleAccordion(e) {
      if (e.target === completeBtn) return;
      const opened = body.style.display === "block";
      body.style.display = opened ? "none" : "block";
      header.setAttribute("aria-expanded", !opened);
      arrowBtn.classList.toggle("opened", !opened);
    }

    header.addEventListener("click", toggleAccordion);
    arrowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAccordion();
    });

    header.appendChild(span);

    // создаём обёртку для кнопок
    const controls = document.createElement("div");
    controls.className = "controls";
    controls.appendChild(arrowBtn);
    controls.appendChild(completeBtn);

    // добавляем блок кнопок
    header.appendChild(controls);

    taskDiv.appendChild(header);
    taskDiv.appendChild(body);
    taskList.appendChild(taskDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderTasks);
