import {
    Parser
} from 'expr-eval';

const gt = document.getElementById('gt'),
    del = document.getElementById('del'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    divide = document.getElementById('divide'),
    multiply = document.getElementById('multiply'),
    minus = document.getElementById('minus'),
    period = document.getElementById('period'),
    plus = document.getElementById('plus'),
    zero = document.getElementById('zero'),
    one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three'),
    four = document.getElementById('four'),
    five = document.getElementById('five'),
    six = document.getElementById('six'),
    seven = document.getElementById('seven'),
    eight = document.getElementById('eight'),
    nine = document.getElementById('nine'),
    equals = document.getElementById('equals'),
    screen = document.getElementById('screen')

let display = ''

let Gt = 0;

gt.addEventListener("click", () => {
    display == '0' ? display = '' : display
    screen.textContent = Gt;
});

ce.addEventListener("click", () => {
    display = '0'
    Gt = 0;
    displayNum();
});

del.addEventListener('click', () => {
    display = display.substring(0, display.length - 1);
    display.length == 0 ? display = '0' : display;
    displayNum();
});

period.addEventListener("click", () => {
    display == '0' ? display = '' : display
    display += period.textContent.toString();
    displayNum();
});

zero.addEventListener("click", () => {
    display == '0' ? display = '' : display
    display += zero.textContent.toString();
    displayNum();
});

one.addEventListener("click", () => {
    display == '0' ? display = '' : display
    display += one.textContent.toString();
    displayNum();
});
two.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += two.textContent.toString();
    displayNum();
});

three.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += three.textContent.toString();
    displayNum();
});

four.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += four.textContent.toString();
    displayNum();
});

five.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += five.textContent.toString();
    displayNum();
});

six.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += six.textContent.toString();
    displayNum();
});

seven.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += seven.textContent.toString();
    displayNum();
});

eight.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += eight.textContent.toString();
    displayNum();
});

nine.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += nine.textContent.toString();
    displayNum();
});

minus.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += minus.textContent.toString();
    displayNum();
});

multiply.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += multiply.textContent.toString();
    displayNum();
});

plus.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += plus.textContent.toString();
    displayNum();
});

divide.addEventListener("click", () => {
    display == '0' ? display = '' : display;
    display += divide.textContent.toString();
    displayNum();
});

c.addEventListener("click", () => {
    display = '0';
    displayNum();
});


equals.addEventListener("click", () => {
    const parser = new Parser();
    let calc = parser.parse(display);
    let result = calc.evaluate();

    Gt += result

    screen.textContent = result;

});

function displayNum() {
    screen.textContent = display
}