// Variables
let ramdomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const paragraph = screen1.querySelector('p');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let xAttempts = 1;

const paragraphMessageDefault =  'Adivinhe o número de 0 a 10';

//Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(event) {
  if ((event.key === 'Enter') && (screen1.classList.contains('hide'))) {
    handleResetClick();
  }
})

// Functions =>
// callback
function handleTryClick(event) {
  event.preventDefault();
  
  const inputNumber = document.querySelector('.screen1 input');
  console.log(inputNumber.value)

  if (!inputNumber.value) {
    paragraph.innerText = paragraphMessageDefault;
    return alert('Por favor insira um número.');
  }

  if (inputNumber.value < 0 || inputNumber.value > 10) {
    inputNumber.value = '';
    paragraph.innerText = paragraphMessageDefault;
    return alert('Insira um número válido')
  }

  paragraph.innerText = `Você tentou o número ${inputNumber.value}`

  if (Number(inputNumber.value) === ramdomNumber) {
    toggleScreen();
    
    screen2.querySelector('h2')
    .innerText = 'Parabéns o número era '+ inputNumber.value + '. Você acertou em ' + xAttempts + ' tentativas.'
  }  

  inputNumber.value = "";
  xAttempts++;
}

//function reset
function handleResetClick() {
  toggleScreen();
  ramdomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
  paragraph.innerText = paragraphMessageDefault;
}

// function toogle screen
function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}