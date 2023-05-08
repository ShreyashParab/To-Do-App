let task = []
let input = document.getElementById('input')
let btn = document.getElementById('btn')
let container = document.getElementById('display')
let checkbox = document.getElementById('taskComplete')
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
            statement = `${getTask[i]}`
        }
        
        container.innerHTML += statement

        input.value = ''
    }

    // Task complete logic
    

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

    
    
    

