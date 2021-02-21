const nightIcon = document.querySelector('.nighticon');
const body = document.querySelector('.body')
const input = document.querySelector('.input-txt')
const todoTable = document.querySelector('.todo-table')
const tableFooter = document.querySelector('.table-footer')
const tablebody = document.querySelector('.tablebody')
var deleteButton = document.querySelectorAll('.btnDelete')


body.style.transition = "all 0.8s";
input.style.transition = "all 0.5s";
todoTable.style.transition = "all 0.5s";

nightIcon.addEventListener("click", changeMode);
input.addEventListener('keypress', function(e) {
    addNewTask(e);
});




function changeMode() {
    deleteButton = document.querySelectorAll('.btnDelete')
    if(deleteButton.length != 0){
        deleteButton.forEach(element => {
            element.style.transition = "all 0.5s";
            element.classList.toggle("-night")
        });
    }
    nightIcon.classList.toggle("-night")
    body.classList.toggle("-night");
    input.classList.toggle("-night");
    todoTable.classList.toggle("-night")
}

function addNewTask(e) {
    if (e.keyCode === 13 ) {
       
        let row = document.createElement("tr");
        let check = document.createElement("td");
        let name = document.createElement("td");
        let btn = document.createElement("td");

        check.className = "task check";
        name.className = "task name";
        btn.className = "task delete";
        
        check.innerHTML = `<input type="checkbox" class="check-task">`;
        name.innerText = input.value;
        btn.innerHTML = `   <button class="btnDelete" onclick="removeTask(this.parentElement)">
                                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                             </button>`
        
        row.appendChild(check);
        row.appendChild(name);
        row.appendChild(btn);

        tablebody.appendChild(row)

        tablebody.insertBefore(row, tableFooter)


        input.value=""
        updateTotal()
    }
}

function removeTask(object) {
    let tr = object.parentElement;
    tr.remove();
    updateTotal();
}

function updateTotal() {
    let itens = document.querySelector('.itemleft');
    itens.innerText = `${tablebody.rows.length-1} itens restantes`;
}