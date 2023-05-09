let task = []
let input = document.getElementById('input')
let btn = document.getElementById('btn')
let tasks = document.getElementById('tasks')
let statement = ''

    // getting previous stored task so that is visible even after reload

    let taskInLocalStorage = JSON.parse(localStorage.getItem('todo'))
    for (const i in taskInLocalStorage) {
        task.push(taskInLocalStorage[i])
        insertTask()
    }

    btn.addEventListener('click',insertTask)

    // Insert and display task

    function insertTask(){
        if(input.value)
        {
            task.push(input.value)
        }
    
        localStorage.setItem('todo',JSON.stringify(task))
        
        let getTask = JSON.parse(localStorage.getItem('todo'))

        for(let i = 0; i<getTask.length;i++)
        {
            statement = `<div class="task" id="task">
            <div class="doneTask">
                <label>
                    <input type="checkbox" name="taskComplete" id="taskComplete">
                    <span class="checkmark"></span>
                    <div class="text" id="text">${getTask[i]}</div>
                </label>                 
            </div>
            <div class="action">
                <lord-icon
                    class="editBtn"
                    src="https://cdn.lordicon.com/qtqvorle.json"
                    trigger="hover"
                    colors="outline:#121331,primary:#646e78,secondary:#ebe6ef,tertiary:#4cb4fd"
                    style="width:35px;height:35px">
                </lord-icon>
                <lord-icon
                    class="deleteBtn"
                    src="https://cdn.lordicon.com/jmkrnisz.json"
                    trigger="hover"
                    colors="primary:#e83a30"
                    style="width:35px;height:35px">
                </lord-icon>
            </div>   
        </div>`
        }
        
        tasks.innerHTML += statement

        input.value = ''
        
    }

    // Task complete logic
    
    let checkbox = document.getElementById('taskComplete')
    checkbox.addEventListener('click',taskComplete)

    function taskComplete(event){

        if (event.target.checked) {
            document.getElementById('text').classList.add('taskDone')
            document.getElementById('task').classList.add('taskDoneBg')
        }
        else{
            document.getElementById('text').classList.remove('taskDone')
            document.getElementById('task').classList.remove('taskDoneBg')
        }
    }

    // Task Delete Logic

    let deleteBtn = document.getElementsByClassName('deleteBtn')
    for(let i=0;i<deleteBtn.length;i++)
    {
        deleteBtn[i].addEventListener('click',deleteTask)
    }

    function deleteTask(event){
        
        let element = event.target.parentElement.parentElement.children[0]
        let index = taskInLocalStorage.indexOf(element.innerText)

        let array = JSON.parse(localStorage.getItem('todo'))

        if(index > -1)
        {
            array.splice(index,1)
        }

        // element.parentElement.parentElement.removeChild(element.parentElement.parentElement.children[0])
        localStorage.setItem('todo',JSON.stringify(array))           
    }




    
    
    

