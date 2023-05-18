export function createTR() {
    let tableBody = document.getElementById("tbody");
    let newTr = document.createElement("tr");
    
    newTr.classList.add("tr_elements");

    tableBody.append(newTr);

    return newTr;
}