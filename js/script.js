const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlayClose = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlayClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills-percent__wrapper__item-head__percents'),
    line = document.querySelectorAll('.skills-percent__wrapper__item-rentangle__include span');
    
counters.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});