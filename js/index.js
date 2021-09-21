
// найти кнопки в js
// написать скрипт перебора массива цветов и назначение в инлайн стиль body background-color
// смена происходит раз в секунду
// добавить формулу рандомности выбора цвета

// когда запускается таймер, кнопка start становиться не активна
// кнопка стоп снимает таймер stop

// import colors from "/data/data.js";

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];


let timerId = null;

const refs = {
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

const randomNumberFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBckgrdcolorToBody(colors, randomNumberFromInterval) {
    
    console.log(refs.body.style.backgroundColor = colors[randomNumberFromInterval(0, 5)]);
};

function stopChangeColors() {
    clearTimeout(timerId);
    refs.buttonStart.removeAttribute('disabled');
};

function changeColorAtInterval() {
    timerId = setInterval(setBckgrdcolorToBody, 1000, colors, randomNumberFromInterval);

    if (timerId) {
        refs.buttonStart.setAttribute('disabled', '');
    };
};


refs.buttonStart.addEventListener('click', changeColorAtInterval);

refs.buttonStop.addEventListener('click', stopChangeColors);

















