import { students } from "../script.js";

export function inputsFilter() {
    let surnameFilter = document.getElementById("surname_filter").value.toLowerCase();
    let nameFilter = document.getElementById("name_filter").value.toLowerCase();
    let lastnameFilter = document.getElementById("lastname_filter").value.toLowerCase();
    let birthdateFilter = document.getElementById("birthdate_filter").value.toLowerCase();
    let courseFilter = document.getElementById("course_filter").value.toLowerCase();
    let facultyFilter = document.getElementById("faculty_filter").value.toLowerCase();

    for(let i = 0; i < students.length; i++) {
        let student = students[i];

        let studentSurname = student.getElementsByClassName("surname")[0].textContent.toLowerCase();
        let studentName = student.getElementsByClassName("name")[0].textContent.toLowerCase();
        let studentLastname = student.getElementsByClassName("lastname")[0].textContent.toLowerCase();
        let studentBirthdate = student.getElementsByClassName("birthdate")[0].textContent.toLowerCase();
        let studentCourse = student.getElementsByClassName("course")[0].textContent.toLowerCase();
        let studentFaculty = student.getElementsByClassName("faculty")[0].textContent.toLowerCase();

        
    };
};