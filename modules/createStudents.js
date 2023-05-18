import { students } from "../script.js";
import { clearStudents } from "./clearStudents.js";
import { renderingStudents } from "./renderingStudents.js";

const openFormBTN = document.getElementById("open_form_btn");
const studentsFORM = document.getElementById("main_form");
const container = document.getElementById("container");
const writeBTN = document.getElementById("write_btn");
const closeFormBTN = document.getElementById("close_form_btn");

openFormBTN.addEventListener("click", () => {
    studentsFORM.style.display = "flex";
    openFormBTN.style.display = "none";
    container.style.display = "none";
});

closeFormBTN.addEventListener("click", () => {
    studentsFORM.style.display = "none";
    openFormBTN.style.display = "block";
    container.style.display = "flex";
})

writeBTN.addEventListener("click", () => {
    let surnameValue = document.querySelector("#input_surname").value.trim();
    let nameValue = document.querySelector("#input_name").value.trim();
    let lastnameValue = document.querySelector("#input_lastname").value.trim();
    let birthdateValue = document.querySelector("#input_birthdate").value;
    let yearsOfStudyValue = document.querySelector("#start_year_study").value.trim();
    let facultyValue = document.querySelector("#input_faculty").value.trim();

    let studentsObject =
        {
            surname: surnameValue,
            name: nameValue,
            lastname: lastnameValue,
            birthdate: birthdateValue,
            yearsOfStudy: yearsOfStudyValue,
            faculty: facultyValue
        }
    

    if(birthdateValue < new Date(1900, 0, 1) || yearsOfStudyValue < new Date(2000, 0, 1).getFullYear()) {
        alert("Проверьте дату и год начала обучения!");
        return;
    } else if(parseInt(birthdateValue) > new Date().getFullYear()) {
        alert("Проверьте наличие ошибок в дате");
        return;
    } else if(yearsOfStudyValue > new Date().getFullYear()) {
        alert("Проверьте наличие ошибок в годе начала обучения");
        return;
    } else if(surnameValue == "" || nameValue == "" || lastnameValue == "" || facultyValue == "") {
        alert("Проверьте Ф.И.О или факультет на наличие ошибок");
        return;
    } else if(birthdateValue == "") {
        alert("Неверная дата рождения");
        return;
    } else if(yearsOfStudyValue == "") {
        alert("Вводить можно только цифры")
        return;
    } else students.push(studentsObject);

    studentsFORM.style.display = "none";
    openFormBTN.style.display = "block";
    container.style.display = "flex";
    
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("add_student_form").reset();

    clearStudents();
    renderingStudents();
});
