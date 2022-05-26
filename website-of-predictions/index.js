const timer = document.querySelector("#timer");
const text = document.querySelector("#text");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const obj = {
  1: "Все загаданные желания и намеченные планы осуществятся",
  2: "Не стоит пренебрегать чужим мнением. Рядом с Вами находятся люди, которые искренне хотят помочь",
  3: "Пришло время заявить о себе, даже если это кому-то не понравится",
  4: "Сейчас в Вашей жизни наступает переломный момент, от которого зависит будущее",
  5: "Пришло время показать, кем же Вы являетесь на самом деле",
  6: "На протяжении многих лет Вам будут сопутствовать счастье, здоровье, удача и благополучие",
  7: "Впереди Вас ждет неожиданное получение денег, которое поправит Ваше пошатнувшееся материальное положение",
  8: "Не огорчайтесь, если дела идут не так, как Вам бы этого хотелось, удача уже на пороге",
  9: "Пора собирать чемоданы: Вас ждет путешествие в приятной компании",
  10: "Ваши отношения с любимым человеком продлятся долго, если Вы не будете рассказывать о них незнакомым людям",
};

let i;

let timerId;

start.addEventListener("click", () => {
  timerId = setInterval(function () {
    i = getRandomInt(1, 10);
    timer.innerHTML = i;
  }, 100);
  start.classList.remove("active");
  stop.classList.add("active");
});
stop.addEventListener("click", () => {
  text.innerHTML = obj[i];
  clearInterval(timerId);
  stop.classList.remove("active");
});

// helpers
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
