


//--->VARIABLES

var clearBtn = document.querySelector('.clear-btn');
var manifestBtn = document.querySelector('.manf-btn');
var hideSymbol = document.querySelector('.symbol-1-b');
var welcomeBox = document.querySelector('cb-1');
var showMessage = document.querySelector('.cb-2');
var resetBox = document.querySelector('.cb-3');
var message = document.querySelector('.message');
var radMa = document.querySelector('#mantra')
var radAf = document.querySelector('#affirmation')
var radios = document.querySelector('.box-2')
var resetMsg = document.querySelector('.flip-box')


//---> EVENT LISTENERS
manifestBtn.addEventListener('click', viewMessage)
clearBtn.addEventListener('click', clearScreen)


//---> EVENT HANDLERS


function viewMessage(){
 if (radAf.checked === true){
   randomizeAf();
 } else if (radMa.checked === true) {
   randomizeMa();
 }else {
   alert(`Positivity is just one choice below`)
 }
 hideSymbol.classList.add('hidden');
 clearBtn.classList.remove('hidden');
 showMessage.classList.remove('hidden');
 resetBox.classList.add('hidden');
 message.classList.remove('hidden');
}


function clearScreen() {
  hideSymbol.classList.remove('hidden');
  message.classList.add('hidden');
  clearBtn.classList.add('hidden');
  showMessage.classList.add('hidden');
  resetBox.classList.add('hidden');

}



function randomizeAf(){
  var randA = affirmations[Math.floor(Math.random() * affirmations.length)];
  message.innerText = randA

};

function randomizeMa(){
  var randM = mantras[Math.floor(Math.random() * mantras.length)];
  message.innerText = randM

};