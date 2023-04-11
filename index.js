const todoInput = document.querySelector('#todoInput')
const addTaskBtn = document.querySelector('#addTask')
const todolist = document.querySelector('.todo--list')

const edit_btn = document.querySelector('edit_btn')


// create array to store list in localstorage
let list = []


let prevData = JSON.parse(localStorage.getItem('todos'))
for (const i in prevData) {
    list.push(prevData[i])
}
displayData()

addTaskBtn.addEventListener('click',()=>{
    if(todoInput.value)
    {
        list.push(todoInput.value)
    }
    
    localStorage.setItem('todos',JSON.stringify(list))
    todoInput.value=''

    displayData()
})

function displayData(){
    let tasks = ''
    if(list!=null)
    {
        list.forEach((element,index)=>{
            tasks += `
            <div class="task">
                <h2>${element}</h2>
                <div class="action">
                    <button class="edit_btn" title="Edit">
                        <lord-icon
                            src="https://cdn.lordicon.com/qtqvorle.json"
                            trigger="hover"
                            style="width:40px;height:40px">
                        </lord-icon>
                    </button>
                    <button class="delete_btn" title="Delete">
                        <lord-icon
                            src="https://cdn.lordicon.com/exkbusmy.json"
                            trigger="hover"
                            colors="outline:#121331,primary:#646e78,secondary:#e83a30,tertiary:#000000"
                            state="hover-empty"
                            style="width:40px;height:40px">
                        </lord-icon>
                    </button>
                </div>
            </div>`    
                
        })
        todolist.innerHTML = tasks
    }
   
}

let task = document.getElementsByClassName('task')

task.addEventListener('dblclick',()=>{
    console.log('hi')
})

// complete task

// konichiwa




/*

<button class="check_btn">
    <lord-icon
        src="https://cdn.lordicon.com/yqzmiobz.json"
        trigger="hover"
        colors="primary:#30e849"
        style="width:40px;height:40px">
    </lord-icon>
</button>

*/