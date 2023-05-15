let task = [];
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let editBtn = document.getElementById('editBtn');
let tasks = document.getElementById('tasks');
let statement = '';

// Getting previously stored tasks to display even after reload
let taskInLocalStorage = JSON.parse(localStorage.getItem('todo'));

for (const i in taskInLocalStorage) {
  task.push(taskInLocalStorage[i]);
  insertTask();
}

// Insert and display task

btn.addEventListener('click', insertTask);

function insertTask() {
  if (input.value) {
    task.push(input.value);
  }

  localStorage.setItem('todo', JSON.stringify(task));

  let getTask = JSON.parse(localStorage.getItem('todo'));
  statement = '';

  for (let i = 0; i < getTask.length; i++) {
    statement += `<div class="task all remainingTask" id="task">
            <div class="doneTask">
                <label>
                    <input type="checkbox" name="taskComplete" class="taskComplete">
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
        </div>`;
  }

  tasks.innerHTML = statement;
  input.value = '';

  registerCheckboxListeners();
  registerDeleteListeners();
  registerEditListeners();
}

// Register event listeners for checkboxes , edit buttons and delete buttons
function registerCheckboxListeners() {
  let checkboxes = document.getElementsByClassName('taskComplete');

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', taskComplete);
  }
}

function registerDeleteListeners() {
  let deleteBtn = document.getElementsByClassName('deleteBtn');

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', deleteTask);
  }
}

function registerEditListeners() {
  let editBtns = document.getElementsByClassName('editBtn');

  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', editTask);
  }
}

// Task complete logic
function taskComplete(event) {
  let checkbox = event.target;
  let textElement = checkbox.parentNode.querySelector('.text');
  let taskElement = checkbox.parentNode.parentNode.parentNode;

  if (checkbox.checked) {
    textElement.classList.add('taskDone');
    taskElement.classList.add('taskDoneBg');
    taskElement.classList.add('completedTask')
    document.getElementById('completedCount').innerText = ++completeTaskCount
    taskElement.classList.remove('remainingTask')
    document.getElementById('remainingCount').innerText = --remainingTaskCount;

  } else {
    textElement.classList.remove('taskDone');
    taskElement.classList.remove('taskDoneBg');
    taskElement.classList.remove('completedTask')
    document.getElementById('completedCount').innerText = --completeTaskCount
    taskElement.classList.add('remainingTask')
    document.getElementById('remainingCount').innerText = ++remainingTaskCount;
  }
}

  // Task delete logic
  function deleteTask(event) {
    let element = event.target.parentElement.parentElement.children[0];
    let index = taskInLocalStorage.indexOf(element.innerText);
  
    let array = JSON.parse(localStorage.getItem('todo'));
  
    if (index > -1) {
      array.splice(index, 1);
    }
  
    localStorage.setItem('todo', JSON.stringify(array));
    location.reload();
  }
  

  // task edit logic
  function editTask(event) {
    btn.classList.add('hide');
    editBtn.classList.remove('hide');
    let textElement = event.target.parentElement.parentElement.querySelector('.text');
    input.value = textElement.innerText;
  
    editBtn.addEventListener('click', () => {
      let index = taskInLocalStorage.indexOf(textElement.innerText);
      if (index > -1) {
        task[index] = input.value;
        localStorage.setItem('todo', JSON.stringify(task));
        location.reload();
      }
    });

  }

  // filter counter
  
    let allTaskCount = document.getElementsByClassName('all').length;
    let completeTaskCount = document.getElementsByClassName('completedTask').length;
    let remainingTaskCount = document.getElementsByClassName('remainingTask').length;
  
    document.getElementById('totalCount').innerText = allTaskCount;
    document.getElementById('remainingCount').innerText = remainingTaskCount;
  

  // filter button
    let totalBtn = document.getElementById('totalBtn')
    let completedBtn = document.getElementById('completedBtn')
    let remainingBtn = document.getElementById('remainingBtn')

    totalBtn.addEventListener('click',()=>{
      let allStyle = document.getElementsByClassName('all')
      for(let i = 0; i< allStyle.length;i++)
      {
        allStyle[i].style.display = 'flex'
      } 
    })
    
    completedBtn.addEventListener('click',()=>{
      let completeStyle = document.getElementsByClassName('completedTask')
      let remainingStyle = document.getElementsByClassName('remainingTask')
      
      for(let i = 0 ;i < completeStyle.length ; i++)
      {
        completeStyle[i].style.display = 'flex'
      }

      for(let i = 0; i<remainingStyle.length;i++)
      {
        remainingStyle[i].style.display = 'none'
      }

    })

    remainingBtn.addEventListener('click',()=>{
      let completeStyle = document.getElementsByClassName('completedTask')
      let remainingStyle = document.getElementsByClassName('remainingTask')
      
      for(let i = 0 ;i < completeStyle.length ; i++)
      {
        completeStyle[i].style.display = 'none'
      }

      for(let i = 0; i<remainingStyle.length;i++)
      {
        remainingStyle[i].style.display = 'flex'
      }
    })
  

    
