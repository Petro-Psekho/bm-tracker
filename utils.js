// utils.js
export function createEl(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);

  Object.entries(attrs).forEach(([key, val]) => {
    if (key.startsWith("on") && typeof val === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), val);
    } else if (key === "html") {
      el.innerHTML = val;
    } else if (key === "disabled") {
      // устанавливаем булево свойство, а не атрибут
      el.disabled = val;
    } else if (key === "class") {
      // класс назначаем через свойство
      el.className = val;
    } else if (typeof val === "boolean") {
      // другие булевы атрибуты (если будут)
      el[key] = val;
    } else {
      el.setAttribute(key, val);
    }
  });

  children.flat().forEach((child) => {
    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child));
    } else if (child) {
      el.appendChild(child);
    }
  });

  return el;
}
