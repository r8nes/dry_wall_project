// Selector getter
let getSelector = (selector) => {
  return document.querySelector(selector);
};

// Модальное окно
// 1_Заявка

let consultationButton = getSelector('.popup-btn');
let consultationModal = getSelector('.popup');
let consultationCloseButton = getSelector('.popup-close');
let consultationSuccess = getSelector('.popup-modal-btn');
let phoneForm = getSelector('.phone-form');
let nameForm = getSelector('.name-form');

function onPopupButtonClick() {
  consultationModal.classList.toggle('is-open');
  consultationSuccess.addEventListener('click', onPopupButtonSend);
}

function onPopupButtonSend(event) {  
    event.preventDefault();
    if (!nameForm.value)  {
      nameForm.style.borderColor = 'red';
      nameForm.style.transition = 'border 0.35s';
      setTimeout(() => {
      nameForm.style.borderColor = '#dddddd';
      nameForm.style.transition = 'border 0.35s';
      },700)
      return false;
    } 
  }

function init() {
  consultationButton.addEventListener('click', onPopupButtonClick);
  consultationCloseButton.addEventListener('click', onPopupButtonClick);
}

init();
