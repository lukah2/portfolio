
const iconoResponsiveMenu = document.querySelector('#iconoResponsiveMenu')
    iconoResponsiveMenu.addEventListener('click', ev => {
        let nav = document.querySelector('#nav')

        if(nav.className === ""){
            nav.classList.add('response')
        } else {
            nav.classList.remove('response')
        }
    })