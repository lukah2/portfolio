
const display = document.querySelector('#pantalla')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {

    button.addEventListener('click', ev => {

        const digito = button.textContent

        if (display.textContent.length === 15) {

            let msg = document.createElement('p')
            msg.textContent = 'Solo se aceptan 15 digitos'
            msg.classList.add('msgAlert')

            display.textContent = ''
            display.appendChild(msg)
            return
        }
        if (button.id === 'clean') {
            display.textContent = '0'
            return

        } else if (button.id === 'borrar') {

            if (display.textContent.length === 1 || display.textContent === 'SyntaxERROR!' || display.textContent === 'No se puede dividir entre cero.' || display.textContent === 'Solo se aceptan 15 digitos') {

                display.textContent = '0'
                return
            }

            display.textContent = display.textContent.slice(0, -1)
            return

        } else if (button.id === 'igual') {
            try {
                display.textContent = eval(display.textContent)

                if (display.textContent === 'Infinity') {

                    let msg = document.createElement('p')
                    msg.textContent = 'No se puede dividir entre cero.'
                    msg.classList.add('msgAlert')

                    display.textContent = ''
                    display.appendChild(msg)
                    return
                }
                if(display.textContent === ''){
                    display.textContent = '0'
                }
                return

            } catch (e) {
                display.textContent = 'SyntaxERROR!'
                return
            }
        }
        if (display.textContent === '0' || display.textContent === 'No se puede dividir entre cero.' || display.textContent === 'SyntaxERROR!' || display.textContent === 'Solo se aceptan 15 digitos') {

            display.textContent = digito
            return
        }
        display.textContent += digito
    })
})