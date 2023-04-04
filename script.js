const plus = document.querySelector('.js-plus');
const minus = document.querySelector('.js-minus');
const multiply = document.querySelector('.js-multiply');
const divide = document.querySelector('.js-divide');
const input1 = document.querySelector('.js-input1');
const input2 = document.querySelector('.js-input2');
const result = document.querySelector('js-result');

let firstValue = input1.value;
let secondValue = input2.value;

const Add = (number1, number2) => {
    return number1 + number2
};
const Minus = (number1, number2) => {
    return number1 - number2
};
const Multply = (number1, number2) => {
    return number1 * number2
};
const Divide = (number1, number2) => {
    return number1 / number2
};
plus.addEventListener("click", () => {
    console.log(Add(firstValue,secondValue))
});
minus.addEventListener("click", () => {
});
multiply.addEventListener("click", () => {
});
divide.addEventListener("click", () => {
});
