export function clearStudents() {
    let trElements = document.querySelectorAll(".tr_elements");

    for(let i = 0; i < trElements.length; i++) {
        trElements[i].remove();
    }
}