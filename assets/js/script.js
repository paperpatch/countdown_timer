const NEW_YEAR = "1 Jan 2022"

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

function countdown() {
  var newYearsDate = new Date(NEW_YEAR);
  var currentDate = new Date();

  // results in milliseconds. divide by 1000 to get seconds
  var totalSeconds = new Date(newYearsDate - currentDate) / 1000;

  var days = Math.floor(totalSeconds / 86400);
  var hours = Math.floor(totalSeconds / 3600) % 24;
  var minutes = Math.floor(totalSeconds / 60) % 60;
  var seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  console.log(days);
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  // console.log(minutes);

}

countdown();
setInterval(countdown, 1000);