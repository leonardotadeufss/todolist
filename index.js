const nightIcon = document.querySelector('.nighticon');
const body = document.querySelector('.body')
const input = document.querySelector('.input-txt')
const table = document.querySelector('.todo-table')
const deleteButton = document.querySelector('.btnDelete')


body.style.transition = "all 0.8s";
input.style.transition = "all 0.5s";
table.style.transition = "all 0.5s";
deleteButton.style.transition = "all 0.5s";

nightIcon.addEventListener("click", changeMode);
input.addEventListener('keypress', function(e) {
    addNewTask(e);
});




function changeMode() {
    nightIcon.classList.toggle("-night")
    body.classList.toggle("-night");
    input.classList.toggle("-night");
    table.classList.toggle("-night")
    deleteButton.classList.toggle("-night")
}

function addNewTask(e) {
    if (e.keyCode === 13) {
        input.value=""
    } else {
        
    }
}