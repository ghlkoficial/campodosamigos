/*Abrir e fechar menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Fechar menu quando clicar na opção*/

const linksdomenu = document.querySelectorAll('nav ul li a')

for (const link of linksdomenu) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
