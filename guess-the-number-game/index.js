/*
              Игра угадай число на JavaScript
      В этой игре компьютер загадывает число от 1 до 100.
      В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать,
      что же загадал компьютер.
      Если игрок ввел число, меньше загаданного, компьютер должен написать
      'введите число побольше', а если введено больше загаданного, то,
      соответственно, компьютер должен написать 'введите число поменьше'.
              */

const numberGame = document.querySelector("#number-game");
const resultGame = document.querySelector(".result-game");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const number = getRandomInt(1, 100);

numberGame.addEventListener("input", () => {
  if (Number(numberGame.value) < number) {
    resultGame.innerHTML = "введите число побольше";
  }
  if (Number(numberGame.value) > number) {
    resultGame.innerHTML = "введите число поменьше";
  }
  if (Number(numberGame.value) == number) {
    resultGame.innerHTML = "вы угадали";
  }
});


const obj = {
  p: 'paragraph',
  div: 'div div div',
  span: 'span span span'
}

obj[input.value] // 