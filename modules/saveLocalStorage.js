import { students } from "../script.js";

export function saveLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}