'use strict'

const selectBtn = document.querySelector('.selectList'),
    arrowSelectList = document.querySelector('.selectList__arrow'),
    itemsSelectList = document.querySelector('.select__list-items'),
    inputRangeProgress = document.querySelector('.input__range__progress'),
    inputRangeValue = document.querySelector('.range'),
    burger = document.querySelector('.header__nav-burger'),
    burgerNav = document.querySelector('.header__nav');

selectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    selectBtn.classList.toggle('selectList__visible');
    arrowSelectList.classList.toggle('selectList__arrow__visible');
    itemsSelectList.classList.toggle('select__list-items__visible');

});

inputRangeValue.addEventListener('input', () => {
    inputRangeProgress.textContent = `${inputRangeValue.value} %`;
});

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerNav.classList.toggle('open');
})



