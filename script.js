const plus = document.querySelector('.js-plus');
const minus = document.querySelector('.js-minus');
const multiply = document.querySelector('.js-multiply');
const divide = document.querySelector('.js-divide');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const result = document.querySelector('js-result');
const answer = document.querySelector('.js-result');


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

const Clear = () => {
    input1.value = ""
         input2.value = ""
}

plus.addEventListener('click', () => {
    answer.textContent = Add(parseInt(input1.value),parseInt(input2.value))
         Clear()
})
minus.addEventListener("click", () => {
    answer.textContent = Minus(parseInt(input1.value),parseInt(input2.value))
         Clear()
});
multiply.addEventListener("click", () => {
    answer.textContent = Multply(parseInt(input1.value),parseInt(input2.value))
         Clear()
});
divide.addEventListener("click", () => {
    answer.textContent = Divide(parseInt(input1.value),parseInt(input2.value))
         Clear()
});
