var menuHamburguer = document.getElementById("menuHamburguer")
var menu = document.getElementById("menu")
var menuFundo = document.getElementById("menuFundo")

menuHamburguer.addEventListener('click', () => {
    if (menu.classList.contains('menuEntrando')) {
        menu.classList.remove('menuEntrando')
        menu.classList.add('menuSaindo')
        menuFundo.classList.remove('menuSaindo')
        menuFundo.classList.add('opacidadeBaixa')
    } else {
        menu.classList.remove('menuSaindo')
        menu.classList.add('menuEntrando')
        menuFundo.classList.remove('opacidadeBaixa')
        menuFundo.classList.add('opacidadeAlta')
    };
})

menuFundo.addEventListener('click', () => {
    if (menu.classList.contains('menuEntrando')) {
        menu.classList.remove('menuEntrando')
        menu.classList.add('menuSaindo')
        menuFundo.classList.remove('menuSaindo')
        menuFundo.classList.add('opacidadeBaixa')
    }
})