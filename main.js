const todoInput = document.querySelector('#todoInput');
const addTask = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');

addTask.addEventListener('click', () => {
    if (todoInput.value == '') {
        alert('Enter a task!');
    } else {

        let li = document.createElement('li');
        let newTask = document.createTextNode(`${todoInput.value}`);

        li.appendChild(newTask);
        taskList.appendChild(li);

        li.addEventListener('click', () => {
        li.classList.toggle('done');
        })

        const deleteTask = document.createElement('button');
        const textX = document.createTextNode('remove');

        deleteTask.appendChild(textX);
        li.appendChild(deleteTask);

        deleteTask.addEventListener('click', () => {
        taskList.removeChild(li);
        })

    }
    todoInput.value = '';
})