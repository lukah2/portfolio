const newTask = document.querySelector('#newTask')
const addBtn = document.querySelector('.addBtn')
const taskList = document.querySelector('.taskList ')
const msgTask = document.querySelector('.msgTask')
const msgError = document.querySelector('.msgError')

addBtn.addEventListener('click', ev => {
    ev.preventDefault()
    const taskValue = newTask.value

    if (taskValue === '') {
        msgError.style.display = 'block'
        return
    }

    const task = document.createElement('p')
    task.classList.add('task')
    task.innerText = taskValue

    const taskContain = document.createElement('li')
    taskContain.classList.add('taskContain')

    taskContain.appendChild(task)
    taskContain.appendChild(addDeleteBtn())
    taskList.appendChild(taskContain)

    newTask.value = ''
    msgError.style.display = 'none'
    msgTask.style.display = 'none'
})

function addDeleteBtn() {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerText = 'X'

    deleteBtn.addEventListener('click', ev => {

        const objetivo = ev.target.parentElement

        taskList.removeChild(objetivo)

        const tareas = document.querySelectorAll('.task')

        if (tareas.length === 0) {
            msgTask.style.display = 'block'
        }
    })
    return deleteBtn
}