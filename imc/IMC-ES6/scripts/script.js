import { Modal } from "./modal.js";
import { AlertError } from './alert-error.js';
import { notNumber, calculateIMC } from './utils.js';
import { form, inputWeight, inputHeight } from './elements.js';

form.onsubmit = function(event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightisNotANumber = notNumber(weight) || notNumber(height);
  if (weightOrHeightisNotANumber) {
    AlertError.open();
    // setTimeout(() => { AlertError.close() }, 4000)
    return;
  }
  
  const result = calculateIMC(weight, height);
  displayResultMessage(result);  
};

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;  
  Modal.message.innerText = message;
  Modal.open();
}