window.addEventListener('load', ev => {
    history.pushState({}, null, '/home')
})

document.body.addEventListener('click', ev => {
    const link = ev.target.closest('a[to]')

    if (link) {
        const ruta = link.getAttribute('to')

        history.pushState({}, null, ruta)
    }
})

//----------- POLLTFILL
const pushState = history.pushState
const replaceState = history.replaceState

history.pushState = function () {
    pushState.apply(history, arguments)

    window.dispatchEvent(new Event('pushstate'))
    window.dispatchEvent(new Event('locationchange'))
}

history.replaceState = function () {
    replaceState.apply(history, arguments)

    window.dispatchEvent(new Event('replacestate'))
    window.dispatchEvent(new Event('locationchange'))
}

window.addEventListener('popstate', ev => {
    window.dispatchEvent(new Event('locationchange'))
})

//---------- LOCATIONCHANGE
window.addEventListener('locationchange', ev => {

    let foundRoute = false

    routes.forEach(route => {

        const scaparated = route.uri.replace('/', '\/')
        const regExp = new RegExp(`^${scaparated}$`)

        if (regExp.test(location.pathname)) {
            const match = location.pathname.match(regExp)

            route.callback(match)
            foundRoute = true
        }

    })
    if (!foundRoute) {

        const errorMsg = document.createElement('div')
            errorMsg.classList.add('.errorContain')

        errorMsg.innerHTML = `
        <img class='notFound' src="./images/errorMsg2.jpg" alt="">
        `
        const main = document.querySelector('main')
        main.innerHTML = ''
       
        main.appendChild(errorMsg)
    }
})

//---------- ROUTES
const routes = []

//---------- ADDROUTES
const addRoute = function (uri, callback) {
    routes.push({ uri, callback })
}

addRoute('/home', () => {
    const main = document.querySelector('main')

    const homeContain = document.createElement('section')
    homeContain.classList.add('homeContain')

    homeContain.innerHTML = `
   
    <h2>SPA - Placeholder</h2>

    <p>Como el titulo nos informa, este sitio es una SPA de la API JsonPlaceholder.</p>
    <h3> Contará con 4 links:</h3>
 
    <div class="rutaContain">
    <h4>Home</h4>

    <p>Que será la página principal en donde veremos esta información, dando a entender un poco de que va el sitio y sus funcionalidades.</p>

    </div>

    <div class="rutaContain">
    <h4>Users</h4>

    <p>En este apartado podremos ver una mini presentación de los usuarios existentes en la API. Dentro de la presentación nos aparecerá la opción de poder ver más información sobre cada usuario en particular.</p>

    <p>Dentro de esa información nos encontraremos con datos mas específicos sobre el usuario. Además tendremos 3 opciones: La primera es ver los posteos del usuario. La segunda es la opción de poder editar los datos del usuario. La tercera opción es la de eliminar el usuario.</p> 

    </div>

    <div class="rutaContain">
    <h4>Crear Usuario</h4>
    <p>En esta sección vamos a tener un formulario, el cual nos pide algunos datos y con el podemos realizar la función de crear un nuevo usuario.</p>
    </div>

    <div class="rutaContain">
    <h4>Not found</h4>
    <p>Este link lo que hará es solamente asignar una ruta inexsistente, la cual no se encontrará en el router y dará el mensaje de que la ruta no existe.</p>
    </div>
    `
    main.innerHTML = ''
    main.appendChild(homeContain)
})

addRoute('/users/viewAll', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        const usersContain = document.createElement('section')
        usersContain.id = 'usersContain'
        usersContain.classList.add('usersContain')


        const main = document.querySelector('main')
        main.innerHTML = ''

        users.forEach(user => {
            const userContain = document.createElement('article')
            userContain.id = `userContain${user.id}`
            userContain.classList.add('userContain')

            userContain.innerHTML = `
                <h2><span>User ID:</span> ${user.id} </h2>
                <h3><span>Name:</span> ${user.name}</h3>
                <a to='/users/viewUser/${user.id}'>Ver más </a>
        `
            usersContain.appendChild(userContain)
            main.appendChild(usersContain)
        })

    } catch (error) {
        console.log(error)
    }
})

addRoute('/users/viewUser/(\\w+)', async (match) => {

    const main = document.querySelector('main')
    main.innerHTML = ''

    try {
        const userId = match[1]
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await response.json()

        const viewUserContain = document.createElement('section')
        viewUserContain.classList.add('viewUserContain')

        const userContain = document.createElement('article')
        userContain.id = 'viewUser'
        userContain.classList.add('viewUser')

        userContain.innerHTML = `
        <h2><span>USER ID:</span> ${user.id} </h2>

                <div class="personalInfo">
                    <h3>Personal Info</h3>
                    <p><span>Name:</span> ${user.name}</p>
                    <p><span>Username:</span> ${user.username} </p>
                    <p><span>Email:</span> ${user.email}</p>
                    <p><span>Phone:</span> ${user.phone}</p>
                    <p><span>Website:</span> ${user.website}</p>

                </div>

                <div class="addressInfo">
                    <h3>Address</h3>
                    <p><span>City:</span> ${user.address.city} </p>
                    <p><span>Street:</span> ${user.address.street} </p>
                    <p><span>Suite: </span>${user.address.suite}</p>
                </div>


                <div id='actionBtn' class="actionBtn">

                    <a to='/users/viewUser/${user.id}/posts'> Posts </a>

                    <button type='button' userId='${user.id}' class='editBtn'>Editar</button>
                    <button type='button' userId='${user.id}' class='deleteBtn'>Borrar</button>

                </div>
 
        `
        viewUserContain.appendChild(userContain)
        main.appendChild(viewUserContain)

        const editBtn = document.querySelector('.editBtn')
        editBtn.addEventListener('click', ev => {

        })

        const deleteBtn = document.querySelector('.deleteBtn')
        deleteBtn.addEventListener('click', ev => {

        })

    } catch (error) {
        console.log(error)
    }
})

addRoute('/users/viewUser/(\\w+)/posts', async (match) => {

    try {
        const main = document.querySelector('main')
        main.innerHTML = ''

        const userId = match[1]
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        const posts = await response.json()

        const postsContain = document.createElement('section')
        postsContain.classList.add('postsContain')

        postsContain.innerHTML = `
            <div class="tituloPostsContain">
            <h2 id='tituloPosts'>Posts del usuario: ${userId}</h2>
            </div>
            `
        posts.forEach(post => {
            const postContain = document.createElement('article')
            postContain.classList.add('postContain')

            postContain.innerHTML = `
                    <h2>Post N°${post.id}</h2>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `
            postsContain.appendChild(postContain)
            main.appendChild(postsContain)

        })

    } catch (error) {
        console.log(error)
    }
})

//----------- BOTON CREAR USUARIO
const createBtn = document.querySelector('#createUserBtn')

const createUser = (user = {}) => {

    const address = user.address || {}

    const createUserContain = document.createElement('section')
    createUserContain.id = 'createUserContain'
    createUserContain.classList.add('createUserContain')

    createUserContain.innerHTML = `
            <form id="form">
                <span closeTarget='createUserContain' class="closeBtn">×</span>

                <fieldset>
                    <legend>Personal Info</legend>

                    <div class="field">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" value="${user.username || ""}">
                    </div>

                    <div class="field">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" value="${user.username || ""}">
                    </div>

                    <div class="field">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" value="${user.email || ""}">
                    </div>

                    <div class="field">
                        <label for="website">Website</label>
                        <input type="url" id="website" name="website" value="${user.website || ""}">
                    </div>

                </fieldset>

                <fieldset>
                    <legend>Address</legend>

                    <div class="field">
                        <label for="street">Street</label>
                        <input type="text" id="street" name="street" value="${address.street || ""}">
                    </div>

                    <div class="field">
                        <label for="suite">Suite</label>
                        <input type="text" id="suite" name="suite" value="${address.suite || ""}">
                    </div>

                    <div class="field">
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" value="${address.city || ""}">
                    </div>

                </fieldset>

                <button type="submit">${(user.id) ? 'Actualizar' : 'Crear'} Usuario</button>
            </form>
            `
    const main = document.querySelector('main')
    main.append(createUserContain)

    const form = document.querySelector('#form')
    form.addEventListener('submit', ev => {
        ev.preventDefault()

        const postData = async () => {
            const cuerpo = {
                personalInfo: {
                    name: form.name.value,
                    username: form.username.value,
                    email: form.email.value,
                    website: form.website.value,
                },
                address: {
                    street: form.street.value,
                    suite: form.suite.value,
                    city: form.city.value,
                }
            }
            try {
                const metodo = user.id ? 'PUT' : 'POST'
                const endUrl = user.id ? `/${user.id}` : ''

                const response = await fetch('https://jsonplaceholder.typicode.com/users' + endUrl, {
                    method: metodo,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(cuerpo),
                })

                const newUser = await response.json()

                if (newUser.id) {

                    form.querySelector('.closeBtn').click()

                    const alertCreate = document.createElement('div')
                    alertCreate.id = 'userCreated'
                    alertCreate.classList = 'userCreated'

                    alertCreate.innerHTML = `
                        <h2>¡ Usuario guardado con exito!</h2>
                        <button closeTarget='userCreated' class="closeBtn">Aceptar</button>
                        `
                    const main = document.querySelector('main')
                    main.appendChild(alertCreate)
                }
                console.log(newUser)

            } catch (error) {
                console.log(error)
            }
        }
        postData()
    })
}
createBtn.addEventListener('click', ev => {
    ev.preventDefault()
    createUser()
})
// ---------------- CLOSE BTN 
document.body.addEventListener('click', ev => {
    const elemento = ev.target.closest('.closeBtn')

    if (elemento) {
        const closeTarget = elemento.getAttribute('closeTarget')

        const objetivo = document.querySelector(`.${closeTarget}`)

        objetivo.outerHTML = ''
    }
})
// ---------------- EDIT BTN
document.body.addEventListener('click', ev => {
    const editBtn = ev.target.closest('.editBtn')

    if (editBtn) {
        const userId = editBtn.getAttribute('userId')

        const editUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
                const user = await response.json()

                console.log(user)

                createUser(user)
            } catch (error) {
                console.log(error)
            }
        }
        editUser()
    }
})
// ---------------- DELETE BTN
document.body.addEventListener('click', ev => {
    const deleteBtn = ev.target.closest('.deleteBtn')

    if (deleteBtn) {
        const userId = deleteBtn.getAttribute('userId')
        const elementoDelete = `userContain${userId}`

        const alertCreate = document.createElement('div')
        alertCreate.id = 'userCreated'
        alertCreate.classList = 'userCreated'

        alertCreate.innerHTML = `
        <h2>¿Desea borrar este usuario?</h2>
        <button closeTarget='userCreated' class="closeBtn">Aceptar</button>
        <button closeTarget='userCreated' class="closeBtn">Cancelar</button>

            `
        const main = document.querySelector('main')
        main.appendChild(alertCreate)

        alertCreate.querySelector(':nth-child(2)').addEventListener('click', async ev => {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
                    method: 'DELETE',
                })
                const user = await response.json()
                console.log(user)

                if (user.value = {}) {
                    const alertCreate = document.createElement('div')
                    alertCreate.id = 'userCreated'
                    alertCreate.classList = 'userCreated'

                    alertCreate.innerHTML = `
                <h2>¡Usuario borrado con exito!</h2>
                <button userDelete='${userId} closeTarget='userCreated' class="closeBtn okDelete">Aceptar</button>
                `
                
                main.appendChild(alertCreate)
               }
               const okDelete = document.querySelector('.okDelete')
                okDelete.addEventListener('click', ev => {

                    history.pushState({}, null, '/users/viewAll')                       
                })

            } catch (error) {
                console.log(error)
            }
        })
    }
})


