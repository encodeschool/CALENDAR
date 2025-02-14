let day = document.querySelector("#day");
let week = document.querySelector("#weekday");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let now = new Date();

let weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

day.innerHTML = (now.getDate() < 10 ? "0" : "") + now.getDate();
week.innerHTML = weeks[now.getDay()];
month.innerHTML = months[now.getMonth()];
year.innerHTML = now.getFullYear();
