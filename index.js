let task = []
let input = document.getElementById('input')
let btn = document.getElementById('btn')
let container = document.getElementById('display')
let statement = ''

    let taskInLocalStorage = JSON.parse(localStorage.getItem('todo'))
    for (const i in taskInLocalStorage) {
        task.push(taskInLocalStorage[i])
        insertTask()
    }

    btn.addEventListener('click',insertTask)


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
    

