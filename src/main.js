


//--->VARIABLES

var clearBtn = document.querySelector('.clear-btn');
var manifestBtn = document.querySelector('.manf-btn');
var hideSymbol = document.querySelector('.symbol-1-b');
var welcomeBox = document.querySelector('#cb-1');
var showMessage = document.querySelector('.chakra-box2');
var message = document.querySelector('message');
var radMa = document.querySelector('#mantra')
var radAf = document.querySelector('#affirmation')
var radios = document.querySelector('.box-2')
var resetMsg = document.querySelector('.flip-box')
var text = document.querySelector('.text')

//---> EVENT LISTENERS
manifestBtn.addEventListener('click', viewMessage)
// clearBtn.addEventListener('click', clearScreen)




//---> EVENT HANDLERS

function viewMessage(){
 if (radAf.checked === true){
   randomizeAf();
 } else if (radMa.checked === true) {
   randomizeMa();
 }else {
   alert(`Positivity is just one choice below`)
 }
}


function clearScreen() {
  hideSymbol.classList.add('hidden');
  showMessage.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
}
// welcomeBox.classList.add("hidden")

function randomizeAf(){
  clearScreen()
  var randA = affirmations[Math.floor(Math.random() * affirmations.length)];
  text.innerText = randA
};

function randomizeMa(){
  clearScreen()
  var randM = mantras[Math.floor(Math.random() * mantras.length)];
  text.innerText = randM
};

function rstMsg(){
  var messages = viewMessage()
  if(welcomeBox.innerText = messages){
    document.querySelector('message').reset();
  }
  hideSymbol.classList.remove('hidden');
  clearBtn.classList.add('hidden');
}
