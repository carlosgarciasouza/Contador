var curremtNumberWapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment(){
    currentNumber = currentNumber + 1;
    curremtNumberWapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber = currentNumber - 1;
    curremtNumberWapper.innerHTML = currentNumber;
}
console.log(currentNumber, curremtNumberWapper)