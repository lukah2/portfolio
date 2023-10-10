/*----------- Juegos ------------ */
const productos = [
/*----------- Aventura ------------ */
{
    id: "aWayOut",
    titulo: "A Way Out",
    imagen: "./images/aWayOut.webp",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 13500
},
{
    id: "CrashTeamRumble",
    titulo: "Crash Team Rumble",
    imagen: "./images/crashTeamRumble.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 44000
},
{
    id: "CrashBandicoot4",
    titulo: "Crash Bandicoot 4",
    imagen: "./images/crashBandicoot4.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 37000
},
{
    id: "DiabloIV",
    titulo: "Diablo IV",
    imagen: "./images/diabloIV.webp",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 70000
},
{
    id: "Farcry4",
    titulo: "Farcry 4",
    imagen: "./images/farcry4.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 18000
},
{
    id: "Farcry5",
    titulo: "Farcry 5",
    imagen: "./images/farcry5.webp",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 23000
},
{
    id: "Farcry6",
    titulo: "Farcry 6",
    imagen: "./images/farcry6.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 30000
},
{
    id: "FinalfaFantasy",
    titulo: "Finalfa Fantasy",
    imagen: "./images/finalFantasy.webp",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 43000
},
{
    id: "GodOfWars",
    titulo: "God Of Wars",
    imagen: "./images/godOfWars.png",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 23000
},
{
    id: "Gta5",
    titulo: "GTA V",
    imagen: "./images/gta5.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 23000
},
{
    id: "HogwartsLegacy",
    titulo: "Hogwarts Legacy",
    imagen: "./images/hogwartsLegacy.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 20000
},
{
    id: "LegoIncredibles",
    titulo: "Lego Incredibles",
    imagen: "./images/legoTheIncredibles.jfif",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 20000
},
{
    id: "LegoMarvel",
    titulo: "Lego Marvel",
    imagen: "./images/legoMarvel.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 24000
},
{
    id: "LegoStarWars",
    titulo: "Lego Star Wars",
    imagen: "./images/legoStarWars.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 32000
},
{
    id: "StarWars",
    titulo: "Star Wars",
    imagen: "./images/starWars.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 26330
},
{
    id: "Cuphead",
    titulo: "Cuphead",
    imagen: "./images/cupHead.jpg",
    categoria: {
        nombre: "Aventura",
        id: "aventura"
    },
    precio: 33000
},
/*----------- Acción ------------ */
{
    id: "AssassinsCreedMirage",
    titulo: "Assassins Creed Mirage",
    imagen: "./images/AssassinsCreedMirage.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 17000
},
{
    id: "AssasinsCreedOrigins",
    titulo: "Assasins Creed Origins",
    imagen: "./images/assassinsCreedOrigins.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 19899
},
{
    id: "AssassinsCreedOdyssey",
    titulo: "Assassins Creed Odyssey",
    imagen: "./images/assassinsCreedOdyssey.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 25000
},
{
    id: "AssassinsCreedSyndicate",
    titulo: "Assassins Creed Syndicate",
    imagen: "./images/assassinsCreedSyndicate.png",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 15000
},
{
    id: "Batman",
    titulo: "Batman",
    imagen: "./images/batman.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 21500
},
{
    id: "TombRaider",
    titulo: "Tomb Raider",
    imagen: "./images/tombRaider.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 25500
},
{
    id: "TombRaider2",
    titulo: "Tomb Raider 2",
    imagen: "./images/tombRaider2.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 27300
},
{
    id: "Uncharted4",
    titulo: "Uncharted 4",
    imagen: "./images/uncharted4.jpg",
    categoria: {
        nombre: "Accion",
        id: "accion"
    },
    precio: 30000
},
/*----------- Pelea ------------ */
{
    id: "dbzFighter",
    titulo: "Dragon Ball z Fighter",
    imagen: "./images/dbzfighters.jfif",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 24000
},
{
    id: "dbzKakarot",
    titulo: "Dragon Ball Z Kakarot",
    imagen: "./images/dbzKakarot.webp",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 22200
},
{
    id: "dbzThebreakers",
    titulo: "Dragon Ball z The Breakers",
    imagen: "./images/dbzTheBreakers.jpg",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 35000
},
{
    id: "JumpForce",
    titulo: "Jump Force",
    imagen: "./images/jumpForce.jpg",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 35000
},

{
    id: "StreetFighter5",
    titulo: "Street Fighter V",
    imagen: "./images/streetFighter5.jpg",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 14000
},
{
    id: "Tekken7",
    titulo: "Tekken 7",
    imagen: "./images/tekken7.jpg",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 21900
},
{
    id: "W2k23",
    titulo: "W2k23",
    imagen: "./images/w2k23.webp",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 53000
},
{
    id: "MortalKombatXL",
    titulo: "Mortal Kombat XL",
    imagen: "./images/mortalKombat.jpg",
    categoria: {
        nombre: "Pelea",
        id: "pelea"
    },
    precio: 13000
},
/*----------- Shooters ------------ */
{
    id: "callOfduty3",
    titulo: "Call Of Duty 3",
    imagen: "./images/callOfDuty3.jpg",
    categoria: {
        nombre: "Shooter",
        id: "shooter"
    },
    precio: 20000
},
{
    id: "GhostReconWildlands",
    titulo: "Ghost Recon Wildlands",
    imagen: "./images/ghostReconWildlands.jpg",
    categoria: {
        nombre: "Shooter",
        id: "shooter"
    },
    precio: 23000
},
{
    id: "RainBowsSixExtraccion",
    titulo: "Rainbows Six Extraccion",
    imagen: "./images/rainbowsixExtraccion.jpg",
    categoria: {
        nombre: "Shooter",
        id: "shooter"
    },
    precio: 15200
},
{
    id: "RainBowsSixSiege",
    titulo: "Rainbows Six Siege",
    imagen: "./images/rainbowsSiege.jpg",
    categoria: {
        nombre: "Shooter",
        id: "shooter"
    },
    precio: 14520
},
{
    id: "RedReadRedemption",
    titulo: "Red Read Redemption",
    imagen: "./images/redReadRedemption.jpg",
    categoria: {
        nombre: "Shooter",
        id: "shooter"
    },
    precio: 22500
},
/*----------- Supervivencia ------------ */
{
    id: "dyingLight2",
    titulo: "Dying Light 2",
    imagen: "./images/dyingLight2.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 38000
},
{
    id: "evilWhitin2",
    titulo: "Evil Whitin2",
    imagen: "./images/evilWhitin2.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 15000
},
{
    id: "Minecraft",
    titulo: "Minecraft",
    imagen: "./images/minecraft.png",
    categoria: {
        nombre: "Supervivencia",
        id: "supervicencia"
    },
    precio: 30000
},
{
    id: "ResidentEvil2",
    titulo: "Resident Evil 2",
    imagen: "./images/residentEvil2.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 22800
},
{
    id: "ResidentEvil3",
    titulo: "Resident Evil 3",
    imagen: "./images/residentEvil3.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 39999
},
{
    id: "ResidentEvil4",
    titulo: "Resident Evil 4",
    imagen: "./images/residentEvil4.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 21700
},
{
    id: "ResidentEvil5",
    titulo: "Resident Evil 5",
    imagen: "./images/residentEvil5.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 17300
},
{
    id: "ResidentEvil6",
    titulo: "Resident Evil 6",
    imagen: "./images/residentEvil6.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 26100
},

{
    id: "ResidentEvil7",
    titulo: "Resident Evil 7",
    imagen: "./images/residentEvil7.jpg",
    categoria: {
        nombre: "Supervivencia",
        id: "supervivencia"
    },
    precio: 35300
},
/*----------- Deportes ------------ */
{
    id: "Fifa24",
    titulo: "Fifa 24",
    imagen: "./images/fifa24.jfif",
    categoria: {
        nombre: "Deportes",
        id: "deportes"
    },
    precio: 34000
},

/*----------- Carrera ------------ */
{
    id: "CrashTeamRacing",
    titulo: "CrashTeamRacing",
    imagen: "./images/crashTeamRacing.jpg",
    categoria: {
        nombre: "Carrera",
        id: "carrera"
    },
    precio: 30000
},
{
    id: "F12022",
    titulo: "F1 2022",
    imagen: "./images/f122.jpg",
    categoria: {
        nombre: "Carrera",
        id: "carrera"
    },
    precio: 20000
},
{
    id: "F12023",
    titulo: "F1 2023",
    imagen: "./images/f123.jpg",
    categoria: {
        nombre: "Carrera",
        id: "carrera"
    },
    precio: 52000
},
{
    id: "GearShifters",
    titulo: "Gear Shifters",
    imagen: "./images/gearShifters.jpg",
    categoria: {
        nombre: "Carrera",
        id: "carrera"
    },
    precio: 13000
},
{
    id: "GranTurismo",
    titulo: "Gran Turismo",
    imagen: "./images/granTurismo.jpg",
    categoria: {
        nombre: "Carrera",
        id: "carrera"
    },
    precio: 23000
},
{
    id: "Mr4MotoRacer",
    titulo: "Mr4 Moto Racer",
    imagen: "./images/mr4MotoRacer.jpg",
    categoria: {
        nombre: "Carrera",
        id: "carrera"
    },
    precio: 15000
}, 
]

const contenedorProductos = document.querySelector('#productsContain')
const botonesCategoria = document.querySelectorAll('.btnCategoria')
const tituloProducto = document.querySelector('#tituloPrincipal')
const cantTotalProducts = document.querySelector('#cantTotalProducts')


const cargarProductos = (productosSeleccionados) => {
    contenedorProductos.innerHTML = ''

    productosSeleccionados.forEach(producto => {
        const productoContain = document.createElement('article')
        productoContain.classList.add('producto')
        productoContain.innerHTML = `
            <img class="imagenProducto" src="${producto.imagen}" alt="${producto.titulo}">

            <div class="caracProducto">
                <h3 class="nombreProducto">${producto.titulo}</h3>
                <p class="precioProducto">$${producto.precio}</p>
                <button class="agregarProducto" id="${producto.id}">Agregar</button>
            </div>
            `
        contenedorProductos.appendChild(productoContain)
    });
}
cargarProductos(productos)

document.body.addEventListener('click', ev => {

    const btnCategoria = ev.target.closest('button.btnCategoria')

    if (btnCategoria) {
        const tipoCategoria = ev.target.getAttribute('categoria')

        botonesCategoria.forEach(boton => boton.classList.remove('active'))
        btnCategoria.classList.add('active')

        if (btnCategoria.id != 'todos') {
            const productosCategoria = productos.filter(producto => producto.categoria.id === btnCategoria.id)

            tituloProducto.innerHTML = tipoCategoria
            cargarProductos(productosCategoria)
        } else {
            tituloProducto.innerHTML = tipoCategoria
            cargarProductos(productos)
        }
    }

    const btnAgregar = ev.target.closest('button.agregarProducto')
    if (btnAgregar) {

        function agregarAlCarrito(ev) {

            const idBoton = btnAgregar.id
            const productoAgregado = productos.find(producto => producto.id === idBoton)

            if (productosEnCarrito.some(producto => producto.id === idBoton)) {
                const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
                productosEnCarrito[index].cantidad++
            } else {
                productoAgregado.cantidad = 1
                productosEnCarrito.push(productoAgregado)
            }

            actualizarCantProductos()
            localStorage.setItem('productosEnElCarrito', JSON.stringify(productosEnCarrito))
        }
        agregarAlCarrito()
    }
})

// PRODUCTOS EN CARRITO

let productosEnCarrito;

const productosEnCarritoLs = JSON.parse(localStorage.getItem('productosEnElCarrito'))

    if (productosEnCarritoLs) {
        productosEnCarrito = productosEnCarritoLs
        actualizarCantProductos()
    } else {
        productosEnCarrito = []
    }
    function actualizarCantProductos() {
        let cantidadActualizada = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
        cantTotalProducts.innerHTML = cantidadActualizada
    }
