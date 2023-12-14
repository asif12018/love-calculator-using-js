let firstPerson = prompt('enter your name: ')
let secondPerson = prompt('enter your loved one name: ')
let totalInput = (firstPerson.length + secondPerson.length);
function loveCalculator(totalInput){
    let result = Math.random(totalInput);
    return Math.round(result * 100);
}
let output = loveCalculator();
alert('you have got '+output+'%'+' on your love')
