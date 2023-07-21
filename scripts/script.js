const ativaMenu = document.querySelector('.fa-bars');
const naveMenu = document.querySelector('header .navegacao');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x');
    naveMenu.classList.toggle('ativado');
});

