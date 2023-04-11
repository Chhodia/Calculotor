const plus = document.querySelector('.js-plus');
const minus = document.querySelector('.js-minus');
const multiply = document.querySelector('.js-multiply');
const divide = document.querySelector('.js-divide');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const result = document.querySelector('js-result');

let firstValue = input1.value
let secondValue = input2.value

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
plus.addEventListener('click', () => {
    answer.textContent = (Add(Number(input1.value)
         ,Number(input2.value)))
         input1.value = ""
         input2.value = ""
})
minus.addEventListener("click", () => {
});
multiply.addEventListener("click", () => {
});
divide.addEventListener("click", () => {
});

