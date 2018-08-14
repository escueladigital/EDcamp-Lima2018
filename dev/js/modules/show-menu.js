export const showMenu = () => {
  const menu = document.getElementById('main-menu'),
        toggle = document.getElementById('main-menu-toggle')
  toggle.addEventListener('click', () => {
    menu.classList.toggle('show')
  })
}
