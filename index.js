var gunler = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var aylar = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jully",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let today = new Date();

document.getElementById("date").innerHTML = `${today.getDate()}.${
  today.getMonth() + 1
}.${today.getFullYear()} - ${gunler[today.getDay()]}`;

function calculating() {
  let gun = parseInt(document.getElementById("gun").value);

  let ay = parseInt(document.getElementById("ay").value);

  let sonuc1 = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + (gun ? gun : 0)
  );

  document.getElementById("gunsonuc").innerHTML = `${sonuc1.getDate()}.${
    sonuc1.getMonth() + 1
  }.${sonuc1.getFullYear()} ${gunler[sonuc1.getDay()]}`;

  let sonuc2 = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + (ay ? ay : 0),
    new Date().getDate()
  );

  document.getElementById("aysonuc").innerHTML = `${sonuc2.getDate()}.${
    sonuc2.getMonth() + 1
  }.${sonuc2.getFullYear()} ${aylar[sonuc2.getMonth()]}`;
}
