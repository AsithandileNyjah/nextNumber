let numbers = [1, 2, 3, 4, 1, 6, 7, 8, 9];
let x = 0;

let btn = document.querySelector('[next]');
let display = document.querySelector('[seeHere]');

btn.addEventListener('click', nextNum);

function nextNum() {
    if (x < numbers.length) {
        let nextNumber = numbers[x];
        x++;
        console.log(nextNumber);
        display.value = nextNumber;
    } else {
        x = 0;    
    }
}
