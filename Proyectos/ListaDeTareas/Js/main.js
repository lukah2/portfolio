const newTask = document.querySelector('#newTask')
const addBtn = document.querySelector('.addBtn')
const taskList = document.querySelector('.taskList ')
const msgTask = document.querySelector('.msgTask')
const msgError = document.querySelector('.msgError')


// BOTON AGREGAR 
addBtn.addEventListener('click', ev => {
    ev.preventDefault()
    const taskValue = newTask.value

    if (taskValue === '' || taskValue.trim() === "") {
        msgError.style.display = 'block'
        return
    }

    let tareasActuales = JSON.parse(localStorage.getItem('totalTareas'))

    if (tareasActuales) {
        if (tareasActuales.some(tarea => tarea.id === taskValue)) {
            msgError.innerHTML = `La tarea "${taskValue}" ya existe.`
            msgError.style.display = 'block'
            return
        }
    }

    const task = document.createElement('p')
    task.classList.add('task')
    task.id = taskValue
    task.innerText = taskValue

    const taskContain = document.createElement('li')
    taskContain.classList.add('taskContain')


    taskContain.appendChild(task)
    taskContain.appendChild(addDeleteBtn())
    taskList.appendChild(taskContain)

    newTask.value = ''
    msgError.style.display = 'none'
    msgTask.style.display = 'none'

    function agregarTarea() {
        const tarea = {
            tarea: taskValue,
            id: taskValue,
        }

        if (localStorage.getItem('totalTareas') === null) {
            let tareas = []
            tareas.push(tarea)
            localStorage.setItem('totalTareas', JSON.stringify(tareas))
            console.log(localStorage)
        } else {
            let tareasActuales = JSON.parse(localStorage.getItem('totalTareas'))
            tareasActuales.push(tarea)
            localStorage.setItem('totalTareas', JSON.stringify(tareasActuales))
        }
    }
    agregarTarea()
    mostrarTareas()
})

// BOTON BORRAR
function addDeleteBtn() {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerText = 'X'

    deleteBtn.addEventListener('click', ev => {

        const objetivo = ev.target.parentElement
        taskList.removeChild(objetivo)
    })
    return deleteBtn
}

// Funcion Mostrar tareas
const mostrarTareas = () => {
    if (localStorage.getItem('totalTareas')) {
        let tareasActuales = JSON.parse(localStorage.getItem('totalTareas'))
        taskList.innerHTML = ''

        tareasActuales.forEach(tarea => {
            const task = document.createElement('p')
            task.classList.add('task')
            task.innerText = tarea.tarea

            const taskContain = document.createElement('li')
            taskContain.id = tarea.id
            taskContain.classList.add('taskContain')

            taskContain.appendChild(task)
            taskContain.appendChild(addDeleteBtn())
            taskList.appendChild(taskContain)
        });

        msgError.style.display = 'none'
        msgTask.style.display = 'none'

        const tareas = document.querySelectorAll('.task')
        if (tareas.length === 0) {
            msgTask.style.display = 'block'
        }
    }
}
mostrarTareas()

//Borrar tareas Ls
document.body.addEventListener('click', ev => {

    const btnEliminar = ev.target.closest('button.deleteBtn')

    if (btnEliminar) {

        let tareasActuales = JSON.parse(localStorage.getItem('totalTareas'))
        const idBoton = btnEliminar.parentElement.id
        const index = tareasActuales.findIndex(tarea => tarea.id === idBoton)

        tareasActuales.splice(index, 1)
        localStorage.setItem('totalTareas', JSON.stringify(tareasActuales))

        mostrarTareas()

        const tareas = document.querySelectorAll('.task')
        if (tareas.length === 0) {
            msgTask.style.display = 'block'
        }
    }
})   
