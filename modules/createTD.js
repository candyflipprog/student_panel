import { createTR  } from "./createTR.js";

export function createTD() {
    let renderTR = createTR();

    let nameTd = document.createElement("td");
    let surnameTd = document.createElement("td");
    let lastnameTd = document.createElement("td");
    let birthdayTd = document.createElement("td");
    let startStudyTd = document.createElement("td");
    let facultyTd = document.createElement("td");
    
    renderTR.append(surnameTd, nameTd, lastnameTd, birthdayTd, startStudyTd, facultyTd);

    return {
        nameTd, surnameTd, lastnameTd, birthdayTd, startStudyTd, facultyTd
    };
}