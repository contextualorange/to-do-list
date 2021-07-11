const clock = document.querySelector("#clock");
const date = document.querySelector("#date");
const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const monthArray = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getCalendar() {
  const calendar = new Date();
  const day = calendar.getDay();
  const days = calendar.getDate();
  const month = calendar.getMonth();
  date.innerText = `${dayArray[day]} ${monthArray[month]} ${days}.`;
}

getClock();
getCalendar();
setInterval(getClock, 1000);
