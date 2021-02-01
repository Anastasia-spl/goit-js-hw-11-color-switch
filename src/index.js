import './styles.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = (colorsArray) => {
  return colorsArray[randomIntegerFromInterval(0, colorsArray.length - 1)]
};

const refs = {
    startBtnRef: document.querySelector('button[data-action= "start"]'),
    stopBtnRef: document.querySelector('button[data-action= "stop"]'),
    bodyRef: document.querySelector('body'),
}

refs.startBtnRef.addEventListener('click', onStartBtnClick);
refs.stopBtnRef.addEventListener('click', onStopBtnClick);

let intervalId = null;

function onStartBtnClick(event) {
    if (intervalId !== null) {
        return;
    }

    const setBodyBackgroundColor = () => {
        refs.bodyRef.style.backgroundColor = setRandomColor(colors);
    };

    intervalId = setInterval(setBodyBackgroundColor, 1000);
}

function onStopBtnClick() {
    clearInterval(intervalId);
    intervalId = null;
}

tippy('#start-btn', {
    content: 'Click me to start automatic background color change :)',
});

tippy('#stop-btn', {
        content: 'Click me to stop it!',
});