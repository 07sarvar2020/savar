
function myRandom(min, max) {
return Math.floor(Math.random() * (max + 1 - min) + min)  
}
let primer = +prompt('misol neshta yechasiz');

for(let i = 0; i < primer; i++) {
    let num1 = myRandom(10,100);
    let num2 = myRandom(1,10);
    let symbol = myRandom(1,4);
    let example = 0;
    if(symbol == 1) {
        example = num1 + num2;
        symbol = '+';
    }else if(symbol == 2) {
        example = num1 - num2;
        symbol = '-';
    }else if(symbol == 3) {
        example = num1 * num2;
        symbol = '*';
    }else if(symbol == 4) {
        example = num1 / num2;
        symbol = '/';
    }
    let answer = prompt(num1 + symbol + num2);
    alert(answer == example ? " to'g'ri javob berdingiz " + example : " no to'g'ri javob berdingiz " + answer + " to'gri javob " + example)
}
