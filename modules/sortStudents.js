import { students } from "../script.js";
import { clearStudents } from "./clearStudents.js";
import { renderingStudents } from "./renderingStudents.js";

const sortSurname = document.querySelector("#surname_sort");
const sortName = document.querySelector("#name_sort");
const lastnameSort = document.querySelector("#lastname_sort");
const birthdateSort = document.querySelector("#birthdate_sort");
const courseSort = document.querySelector("#course_sort");
const facultySort = document.querySelector("#faculty_sort");

export function sortStudents(keySort){

    const keys = {
        surnameSort: "surname",
        nameSort: "name",
        lastnameSort: "lastname",
        birthdateSort: "birthdate",
        courseSort: "yearsOfStudy",
        facultySort: "faculty"
   };

   students.sort((value1, value2) => {
        const key = keys[keySort];
        return value1[key] > value2[key] ? 1 : -1;
   });

   clearStudents();
   renderingStudents();
}

sortSurname.addEventListener("click", () => {
    sortStudents("surnameSort");
});

sortName.addEventListener("click", () => {
    sortStudents("nameSort");
})

lastnameSort.addEventListener("click", () => {
    sortStudents("lastnameSort");
})

birthdateSort.addEventListener("click", () => {
    sortStudents("birthdateSort");
})

courseSort.addEventListener("click", () => {
    sortStudents("courseSort");
})

facultySort.addEventListener("click", () => {
    sortStudents("facultySort");
})