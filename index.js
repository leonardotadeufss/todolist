const nightIcon = document.querySelector('.nighticon');
const body = document.querySelector('.body')
const input = document.querySelector('.input-txt')
const todoTable = document.querySelector('.todo-table')
const tableFooter = document.querySelector('.table-footer')
const tablebody = document.querySelector('.tablebody')
const bgImage = document.querySelector('.background-image')
const mainAction = document.querySelectorAll('.main-action')
var deleteButton = document.querySelectorAll('.btnDelete')



body.style.transition = "all 0.5s";
input.style.transition = "all 0.5s";
todoTable.style.transition = "all 0.5s";

nightIcon.addEventListener("click", changeMode);
input.addEventListener('keypress', function(e) {
    addNewTask(e);
});

mainAction.forEach(el => {
    el.addEventListener("click", function(e){
        tableAction(e)
    })
    
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
    bgImage.classList.toggle("-night")
}

function addNewTask(e) {
    if (e.keyCode === 13 && input.value != "") {
       
        let row = document.createElement("tr");
        let check = document.createElement("td");
        let name = document.createElement("td");
        let btn = document.createElement("td");

        row.className = "visible"
        check.className = "task check";
        name.className = "task name";
        btn.className = "task delete";
        
        check.innerHTML = `<input type="checkbox" class="check-task" onchange="completetask(this.parentElement)">`;
        name.innerText = input.value;
        btn.innerHTML = `   <button class="btnDelete" onclick="removeTask(this.parentElement)">
                                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                             </button>`
        
        row.appendChild(check);
        row.appendChild(name);
        row.appendChild(btn);

        tablebody.appendChild(row)

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
    let completed = document.querySelectorAll('.completedTask')
    itens.innerText = `${tablebody.rows.length - completed.length} itens restantes`;
}

function completetask(object) {
   let taskname = object.nextSibling
   object.parentElement.classList.toggle("completedTask")
   object.firstChild.classList.toggle("-completed")
   taskname.classList.toggle("-completed")
   updateTotal();
   
}

function tableAction(e){
    switch (e.target.classList[1]) {
        case "all":
            showTasks("all")
            break;
        case "active":
            showTasks("active")
            break;
        case "completed":
            showTasks("completed")
            break;

        case "clearall":
            const completed = document.querySelectorAll('.completedTask')
            completed.forEach(task => {
                removeTask(task.firstChild)
            });
            break;
        default:
            break;
    }
}

function showTasks(string) {
    const activeTask = document.querySelectorAll('.visible')
    const completed = document.querySelectorAll('.completedTask')
    if (string == "all") {
        tablebody.childNodes.forEach(element => {
            element.classList.remove('hidden')

        });
        
    } else if (string == "active") {
        tablebody.childNodes.forEach(element => {
            if (element.classList.contains('completedTask')) {
                element.classList.add('hidden')
            } else {
                element.classList.remove('hidden')
            }
        })
    }else if (string == "completed"){
        tablebody.childNodes.forEach(element => {
            element.classList.add('hidden')

        });
        completed.forEach(element => {
            element.classList.remove('hidden')
        });
    }
    

}