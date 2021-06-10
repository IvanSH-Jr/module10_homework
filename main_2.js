const btn = document.querySelector('.btn-screen')
let screenWidth = ''
let screenHeight = ''
btn.addEventListener('click', () => {
    screenHeight = window.screen.height
    screenWidth = window.screen.width
    console.log(screenHeight)
    alert('Ширина экрана ' + screenWidth + 'px' + ' Высота ' + screenHeight + 'px')
})