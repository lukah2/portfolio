const carritoVacio = document.querySelector('#carritoVacio')
const carritoProductos = document.querySelector('#carritoProductos')
const carritoAcciones = document.querySelector('#carritoAcciones')

const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnElCarrito'))

const cargarProductosCarrito = () => {

    if (productosEnCarrito && productosEnCarrito.length > 0) {

        carritoVacio.classList.add('disabled')
        carritoProductos.classList.remove('disabled')
        carritoAcciones.classList.remove('disabled')

        carritoProductos.innerHTML = ''

        productosEnCarrito.forEach(producto => {

            const carritoProducto = document.createElement('article')
            carritoProducto.classList.add('carritoProducto')

            carritoProducto.innerHTML = `
                        <img class="carritoImagenProducto" src="${producto.imagen}" alt="${producto.titulo}">
        
                        <div class="carritoProductoNombre">
                            <p>Nombre</p>
                            <h3>${producto.titulo}</h3>
                        </div>
        
                        <div class="carritoProductoCantidad">
                                <p>Cantidad</p>
                                <h3>${producto.cantidad}</h3>
                        </div>
        
                        <div class="carritoProductoPrecio">
                                <p>Precio</p>
                                <h3>$${producto.precio}</h3>
                        </div>
        
                        <div class="carritoProductoSubtotal">
                                <p>Subtotal</p>
                                <h3>$ ${producto.precio * producto.cantidad}</h3>
                        </div>
        
                        <button class='eliminar' id="${producto.id}"><i class="bi bi-trash3 "></i></button>
                    `
            carritoProductos.appendChild(carritoProducto)
        })
    } else {
        carritoVacio.classList.remove('disabled')
        carritoProductos.classList.add('disabled')
        carritoAcciones.classList.add('disabled')
    }
    actualizarTotal()
}
cargarProductosCarrito()


document.body.addEventListener('click', ev => {

    const btnEliminar = ev.target.closest('button.eliminar')

    if (btnEliminar) {
        const idBoton = btnEliminar.id
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)

        productosEnCarrito.splice(index, 1)
        localStorage.setItem('productosEnElCarrito', JSON.stringify(productosEnCarrito))

        cargarProductosCarrito()
    }

    const btnVaciarCarrito = ev.target.closest('button.btnVaciarCarrito')
    if (btnVaciarCarrito) {
        productosEnCarrito.length = 0
        localStorage.setItem('productosEnElCarrito', JSON.stringify(productosEnCarrito))
        cargarProductosCarrito()
    }

    const btnComprarCarrito = ev.target.closest('button.btnComprarCarrito')
    if (btnComprarCarrito) {
        productosEnCarrito.length = 0
        localStorage.setItem('productosEnElCarrito', JSON.stringify(productosEnCarrito))

        carritoVacio.classList.remove('disabled')
        carritoVacio.classList.add('compraExitosa')
        carritoProductos.classList.add('disabled')
        carritoAcciones.classList.add('disabled')

        carritoVacio.innerHTML = `Compra realizada con exito <i class="bi bi-cart-check"></i>`
    }
})

function actualizarTotal() {
    const precioTotal = document.querySelector('#total')
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    precioTotal.innerHTML = `$${totalCalculado}`
}