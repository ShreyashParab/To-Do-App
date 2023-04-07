const todoInput = document.querySelector('#todoInput')
const addTaskBtn = document.querySelector('#addTask')
const todolist = document.querySelector('.todo--list')
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

// function displayData(){
//     let tasks = ''
//     if(list!=null)
//     {
//         list.forEach((element,index)=>{
//             tasks += `<div>${element}</div>`
//         })
//         todolist.innerHTML = tasks
//     }
   
// }


// todolist.innerHTML+=`<div>${datafetch[i]}</div>`



