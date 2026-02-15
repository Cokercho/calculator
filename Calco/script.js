const num = document.querySelector(".res");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const dev = document.querySelector(".devision");
const mult = document.querySelector(".multipy");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const equal = document.querySelector(".equal");

// Helper: check if last character is operator
function isLastOperator() {
    let last = num.innerHTML.slice(-1);
    return ["+", "-", "×", "÷"].includes(last);
}

// Numbers
one.onclick = () => num.innerHTML += "1";
two.onclick = () => num.innerHTML += "2";
three.onclick = () => num.innerHTML += "3";
four.onclick = () => num.innerHTML += "4";
five.onclick = () => num.innerHTML += "5";
six.onclick = () => num.innerHTML += "6";
seven.onclick = () => num.innerHTML += "7";
eight.onclick = () => num.innerHTML += "8";
nine.onclick = () => num.innerHTML += "9";
zero.onclick = () => num.innerHTML += "0";

// Operators (NO double operators now)
plus.onclick = () => {
    if (!isLastOperator() && num.innerHTML !== "") {
        num.innerHTML += "+";
    }
};

minus.onclick = () => {
    if (!isLastOperator() && num.innerHTML !== "") {
        num.innerHTML += "-";
    }
};

mult.onclick = () => {
    if (!isLastOperator() && num.innerHTML !== "") {
        num.innerHTML += "×";
    }
};

dev.onclick = () => {
    if (!isLastOperator() && num.innerHTML !== "") {
        num.innerHTML += "÷";
    }
};

// Equal
equal.onclick = () => {
    if (!isLastOperator()) {
        let expression = num.innerHTML
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        num.innerHTML = eval(expression);
    }
};
