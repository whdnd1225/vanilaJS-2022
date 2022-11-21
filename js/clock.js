const clockDay = document.querySelector('h2#clock-day');
const clockTime = document.querySelector('h2#clock-time');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const day = date.toDateString().substring(0, 3);
  const month = date.toDateString().substring(4, 7);

  clockDay.innerText = `${day} ${month}`;
  clockTime.innerText = `${hours}:${minutes}:${seconds}`;
  console.log(date.toDateString());
}

getClock();
setInterval(getClock, 1000);
