// Selector getter
let getSelector = (selector) => {
   return document.querySelector(selector);
}

// Модальное окно 

// 1_Заявка

let consultationButton = getSelector('.popup-btn');
let consultationModal= getSelector('.popup');
let consultationCloseButton = getSelector('.popup-close')

function onPopupButtonClick () {
   consultationModal.classList.toggle('is-open');
}

function init () {
consultationButton.addEventListener('click', onPopupButtonClick); 

consultationCloseButton.addEventListener('click', onPopupButtonClick);


}

init();