import { renderingStudents } from "./modules/renderingStudents.js";
import { saveLocalStorage } from "./modules/saveLocalStorage.js"
import { sortStudents } from "./modules/sortStudents.js";

export let students = [
    {
        surname: "Иванов",
        name: "Иван",
        lastname: "Иванович",
        birthdate: "2005-10-10",
        yearsOfStudy: 2021,
        faculty: "КСК"
    },
    {
        surname: "Кривов",
        name: "Сергей",
        lastname: "Александрович",
        birthdate: "2005-05-10",
        yearsOfStudy: 2022,
        faculty: "РП"
    },
    {
        surname: "Петров",
        name: "Пётр",
        lastname: "Андреевич",
        birthdate: "2005-01-01",
        yearsOfStudy: 2020,
        faculty: "ИСиП(п)"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    renderingStudents();
    sortStudents();
    saveLocalStorage();
});