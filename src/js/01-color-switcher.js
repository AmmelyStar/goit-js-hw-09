
const elements = {
 startBtn: document.querySelector('button[data-start]'),
 stopBtn: document.querySelector('button[data-stop]'),
 body: document.querySelector('body'),

}
let intervalId;


// console.log(elements.startBtn);
// console.log(elements.stopBtn);
// console.log(elements.body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

elements.startBtn.addEventListener('click', startChangeColor);
elements.stopBtn.addEventListener('click', stopCangeColor);

function startChangeColor() {
    
    intervalId = setInterval(() => {
        elements.body.style.backgroundColor = getRandomHexColor();
         
         
    }, 1000); 
    elements.startBtn.disabled = true;  
    elements.stopBtn.disabled = false;
};

function stopCangeColor() {
    clearInterval(intervalId);
    elements.stopBtn.disabled = true;
    elements.startBtn.disabled = false;  
    
};


    

