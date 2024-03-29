function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function (event){
const number = event.target.innerText;
const calcInput = document.getElementById('typed-numbers');
if(isNaN(number)){
    if(number == 'C'){
        calcInput.value = '';
    }
}
else{
    
    const previousNumber = calcInput.value;
    const newCalc = previousNumber + number ;
    calcInput.value = newCalc;
}


});
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    if(pin == typedNumbers){
        const successMessage = document.getElementById('notify-success');
        successMessage.style.display = 'block';
    }
    else{
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
    }
}
