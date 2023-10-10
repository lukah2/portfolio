const listaPokemones = document.querySelector('#listaPokemones')
const btnsHeader = document.querySelectorAll('.btnHeader')

btnsHeader.forEach(boton => {
    boton.addEventListener('click', ev => {
        listaPokemones.innerHTML = ''

        const botonId = ev.target.id

        const tipoPokemon = (
            async () => {
                try {
                    for (let i = 1; i < 151; i++) {
                        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                        const data = await response.json()

                        if (botonId === 'verTodos') {
                            mostrarPokemon(data)
                        } else {
                            const tipos = data.types.map(type => type.type.name)

                            if (tipos.some(tipo => tipo.includes(botonId))) {

                                mostrarPokemon(data)
                            }
                        }
                    }

                } catch (e) {
                    const msgError = document.createElement('h1')
                    msgError.innerHTML = 'No se pudieron encontrar los pokemones'

                    const main = document.querySelector('main')
                    main.innerHTML = ''

                    main.appendChild(msgError)
                }
            })()
    })
})

const viewPokemon =
    ( async () => {
         try {
            for (let i = 1; i < 151; i++) {
               const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                const data = await response.json()
                const vista = mostrarPokemon(data)
            }
        } catch (e) {
            const msgError = document.createElement('h1')
             msgError.innerHTML = 'No se pudieron encontrar los pokemones'

            const main = document.querySelector('main')
            main.innerHTML = ''

            main.appendChild(msgError)
        }
    })()

function mostrarPokemon(poke) {

    let tipos = poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`)
    tipos = tipos.join('')

    let pokeId = poke.id.toString()

    if (pokeId.length === 1) {
        pokeId = '00' + pokeId
    } else if (pokeId.length === 2) {
        pokeId = '0' + pokeId
    }

    const article = document.createElement('article')
    article.classList.add('pokemon')

    article.innerHTML = `
        <p class="pokemonIdBack">#${pokeId}</p>

        <div class="pokemonImg">
            <img src="${poke.sprites.other['official-artwork'].front_default}" alt="*pikachu">
        </div>

        <article class="pokemonInfo">

            <div class="pokeStats">

                <article class='nombreContain'>
                    <p class="pokemonId">#${pokeId}</p>
                    <p class="nombrePokemon">${poke.name}</p>
                </article>

                <article class="estadisticas">
                    <p class="peso">${poke.height}m</p>
                    <p class="altura">${poke.weight}kg</p>
                </article>
             </div>

            <article class="tipoPokemon">
                ${tipos}
            </article>
        `
    listaPokemones.appendChild(article)
}


