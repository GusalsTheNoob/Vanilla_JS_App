const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function getTime() {
  const date = new Date();
  const seconds = formatTime(date.getSeconds());
  const minutes = formatTime(date.getMinutes());
  const hours = formatTime(date.getHours());
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
