const form = document.querySelector('form');
const inputWeight = document.querySelector('#cWeight');
const inputHeight = document.querySelector('#cHeight');

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal h2'),
  buttonClose: document.querySelector('.modal button.close'),
  open() { Modal.wrapper.classList.add('open') },
  close() { Modal.wrapper.classList.remove('open') }
}

form.onsubmit = function(event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = IMC(weight, height)

  const message = `Seu IMC é de ${result}`;

  
  Modal.message.innerText = message;
  Modal.open();  
}

Modal.buttonClose.onclick = () => {
  Modal.close();
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}