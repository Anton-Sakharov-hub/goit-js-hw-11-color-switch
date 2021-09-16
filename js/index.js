
// найти кнопки в js
// написать скрипт перебора массива цветов и назначение в инлайн стиль body background-color
// смена происходит раз в секунду
// добавить формулу рандомности выбора цвета

// когда запускается таймер, кнопка start становиться не активна
// кнопка стоп снимает таймер stop

import colors from "/data/data.js"
// let indexOfColor = 0;
let timerId = null;

const refs = {
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

// function changeIndex(index) {
//     indexOfColor += 1;
//     console.log(index);
// };

// changeIndex(indexOfColor);
// changeIndex(indexOfColor);
// changeIndex(indexOfColor);
// changeIndex(indexOfColor);
// changeIndex(indexOfColor);
// console.log(indexOfColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBckgrncolorToBody(colors, randomIntegerFromInterval) {
        // console.log(colors);
    
    console.log(refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]);
    // console.log(indexOfColor);
    // indexOfColor += 1;
    // if (indexOfColor === 6) {
    //     indexOfColor = 0;
    // };
};


refs.buttonStart.addEventListener('click', () => {
   
    timerId = setInterval(setBckgrncolorToBody, 1000, colors, randomIntegerFromInterval);

    if (timerId) {
        refs.buttonStart.setAttribute('disabled', '');
    };
});

function stopChangeColors() {
    clearTimeout(timerId);
    refs.buttonStart.removeAttribute('disabled');
};

refs.buttonStop.addEventListener('click', stopChangeColors);



// setInterval(setBckgrncolorToBody, 1000, colors, indexOfColor)

// setBckgrncolorToBody(colors, index)

// function setTimer(colors) {
//     const timer = setInterval(setBckgrncolorToBody, 1000, colors);
// };

// setTimer();













