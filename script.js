// script.js
import { tasks } from "./tasks.js";
import { Storage } from "./storage.js";
import { createEl } from "./utils.js";

function toggleAccordion(header, body, arrow) {
  const opened = body.style.display === "block";
  body.style.display = opened ? "none" : "block";
  header.setAttribute("aria-expanded", String(!opened));
  arrow.classList.toggle("opened", !opened);
}

function renderTasks() {
  const progress = Storage.load();
  const container = document.getElementById("taskList");
  container.innerHTML = "";

  tasks.forEach((task, index) => {
    // 1) Создаём элементы
    const header = createEl("div", {
      class: `accordion-header${progress[index] ? " completed" : ""}`,
      tabindex: "0",
      "aria-expanded": "false",
    });
    const title = createEl("span", {}, `День ${index + 1}: ${task.title}`);
    const arrowBtn = createEl("button", {
      class: "toggle-btn",
      html: "&#9654;",
      "aria-label": "Показать детали",
    });
    const completeBtn = createEl(
      "button",
      {
        class: `complete-btn${progress[index] ? " completed" : ""}`,
        disabled: progress[index],
      },
      progress[index] ? "✓ Выполнено" : "Выполнить"
    );

    // 2) Создаём тело аккордеона до навешивания событий
    const body = createEl("div", {
      class: "accordion-body",
      html: task.details,
      style: "display:none;",
    });

    const controls = createEl(
      "div",
      { class: "controls" },
      arrowBtn,
      completeBtn
    );

    // 3) Вешаем обработчики на уже существующие переменные
    header.addEventListener("click", (e) => {
      if (e.target !== completeBtn) {
        toggleAccordion(header, body, arrowBtn);
      }
    });
    header.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target === header) {
        toggleAccordion(header, body, arrowBtn);
      }
    });
    arrowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAccordion(header, body, arrowBtn);
    });
    completeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      progress[index] = true;
      Storage.save(progress);
      renderTasks();
    });

    // 4) Собирать и добавлять в DOM
    header.append(title, controls);
    const taskEl = createEl("div", { class: "accordion-task" }, header, body);
    container.appendChild(taskEl);
  });
}

document.addEventListener("DOMContentLoaded", renderTasks);
