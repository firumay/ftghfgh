const button = document.getElementById("more");
const content = document.getElementById("content");

// Сохраним начальные значения текста
const initialContent = content.textContent;
const initialButtonText = button.textContent;

button.addEventListener("click", () => {
    if (content.textContent === initialContent) {
        content.textContent = "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foaming action creates the additional volume.";
        button.textContent = "Back";
    } else {
        content.textContent = initialContent;
        button.textContent = initialButtonText;
    }
});

const button1 = document.getElementById("f1");
const button2 = document.getElementById("f2");
const button3 = document.getElementById("f3");
const Prise = document.getElementById("Prise");

let prise1 = false;
let prise2 = false;
let prise3 = false;

button1.addEventListener("click", () => {
    button1.classList.add("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
    Prise.textContent = "$3.22";
    prise1 = true;
    prise2 = false;
    prise3 = false;
});
button2.addEventListener("click", () => {
    button1.classList.remove("active");
    button2.classList.add("active");
    button3.classList.remove("active");
    Prise.textContent = "$4.53";
    prise1 = false;
    prise2 = true;
    prise3 = false;
});
button3.addEventListener("click", () => {
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.add("active");
    Prise.textContent = "$5.12";
    prise1 = false;
    prise2 = false;
    prise3 = true;
});

const heart = document.getElementById("heart");
let flag = 1;

heart.addEventListener("click", () => {
    if (flag === 1){
        heart.src = "../img/Heart2.svg"
        flag = 0;
    }
    else {
        heart.src = "../img/Heart.svg"
        flag = 1;
    }
});

const gif = document.getElementById("done");
const buybtn = document.getElementById("buy-button");

buybtn.addEventListener("click", () => {
    if (prise1 === true) {
        gif.style.display = "flex";
    }else if(prise2 === true) {
        gif.style.display = "flex";
    }else if (prise3 === true) {
        gif.style.display = "flex";
    }else {
        alert("выберите размер коффе")
    }
    setTimeout(() => {
        gif.style.display = "none";
    }, 3300);
})