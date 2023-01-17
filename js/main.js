const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// клик по кнопке
navBtn.addEventListener('click', function(event){
    event.stopPropagation();
    togglemobileNav();    
})

//клик по окну за пределами окна навигации
window.addEventListener('click', function(event) {
    event.stopPropagation();

    if (body.classList.contains('no-scroll')) {
        togglemobileNav();
    }

})

// останавливаем клик внутри открытой мобильной навигации

mobileNav.addEventListener('click', function(event){
    event.stopPropagation();
})

function togglemobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
}