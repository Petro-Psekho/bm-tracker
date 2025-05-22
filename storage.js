// storage.js
import { tasks } from "./tasks.js";

const STORAGE_KEY = "bmProgress";

export const Storage = {
  load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : Array(tasks.length).fill(false);
  },
  save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  },
};
