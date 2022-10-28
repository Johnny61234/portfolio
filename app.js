nav = document.querySelector('.nav');
menuButton = document.querySelector('.menu');
exitButton = document.querySelector('.exit');

menuButton.addEventListener('click', () => {
    nav.classList.add('nav_Open')
})

exitButton.addEventListener('click', () => {
    nav.classList.remove('nav_Open')
})