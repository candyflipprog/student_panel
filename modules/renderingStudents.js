import { createTD } from "./createTD.js";
import { students } from "../script.js"; 


export function renderingStudents() {
    for(let i = 0; i < students.length; i++) {
        let renderTD = createTD();
        let course = new Date().getFullYear();

        let startBirthdate = new Date(1900, 0, 1);
        let age = ((new Date().getTime() - new Date(students[i].birthdate)) / (24 * 3600 * 365.25 * 1000)) | 0;

        course -= parseInt(students[i].yearsOfStudy);
        
        if(parseInt(students[i].birthdate) < startBirthdate.getFullYear()) {
            alert("Проверьте наличие ошибок");
            return;
        } else {
            renderTD.birthdayTd.innerHTML = `${students[i].birthdate} (${age} лет)`;
        }

        if(course > 4) {
            renderTD.startStudyTd.innerHTML = `${students[i].yearsOfStudy} (Завершил)`
        } else {
            renderTD.startStudyTd.innerHTML = `${students[i].yearsOfStudy} (${course} курс)`
        }

        renderTD.surnameTd.append(students[i].surname);
        renderTD.nameTd.append(students[i].name);
        renderTD.lastnameTd.append(students[i].lastname);
        renderTD.facultyTd.append(students[i].faculty);
    }  
};