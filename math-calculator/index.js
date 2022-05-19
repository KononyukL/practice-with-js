//Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.

const numberOne = document.querySelector("#number-one");
const numberSecond = document.querySelector("#number-second");
const numberThird = document.querySelector(".number-third");
const root = document.querySelector(".root");
const result = document.querySelector(".result");
const func = (num) => num ** 2;

root.addEventListener("click", () => {
  const sum = func(+numberOne.value) + func(+numberSecond.value);

  if (sum == func(+numberThird.value)) {
    result.innerHTML = `Результат: ${"Это числа Пифагора"}`;
  } else {
    result.innerHTML = `Результат: ${"Это не числа Пифагора"}`;
  }
  numberOne.value = "";
  numberSecond.value = "";
  numberThird.value = "";
});

//Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.

const numberDivider = document.querySelector("#number-divider");
const findDivisor = document.querySelector(".find-divisor");
const resultDivisor = document.querySelector(".result-divisor");
const getDivisors = (num) => {
  let result = [];

  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
};

findDivisor.addEventListener("click", () => {
  resultDivisor.innerHTML = `Результат: ${getDivisors(numberDivider.value)}`;
  numberDivider.value = "";
});

//Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.

const numberFirstDivisor = document.querySelector("#number-first-divisor");
const numberSecondDivisor = document.querySelector("#number-second-divisor");
const commonDivisors = document.querySelector(".common-divisors");
const resultCommonDivisors = document.querySelector(".result-common-divisors");

const getInt = (arr1, arr2) => {
  let result = [];

  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      result.push(elem);
    }
  }

  return result;
};

const inArray = (elem, arr) => {
  return arr.indexOf(elem) !== -1;
};
commonDivisors.addEventListener("click", () => {
  resultCommonDivisors.innerHTML = `Результат: ${getInt(
    getDivisors(numberFirstDivisor.value),
    getDivisors(numberSecondDivisor.value)
  )}`;
  numberFirstDivisor.value = "";
  numberSecondDivisor.value = "";
});

//Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.

const numberFirstDiv = document.querySelector("#number-first-div");
const numberSecondDiv = document.querySelector("#number-second-div");
const greatestDivisor = document.querySelector(".greatest-divisor");
const resultGreatestDivisor = document.querySelector(
  ".result-greatest-divisor"
);

greatestDivisor.addEventListener("click", () => {
  const result = getInt(
    getDivisors(numberFirstDiv.value),
    getDivisors(numberSecondDiv.value)
  );

  resultGreatestDivisor.innerHTML = `Результат: ${Math.max(...result)}`;

  numberFirstDiv.value = "";
  numberSecondDiv.value = "";
});

//Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.

const numberFirstDivis = document.querySelector("#number-first-divis");
const numberSecondDivis = document.querySelector("#number-second-divis");
const leastDivisor = document.querySelector(".least-divisor");
const resultLeastDivisor = document.querySelector(".result-least-divisor");

leastDivisor.addEventListener("click", () => {
  const res = getInt(
    getDivisors(numberFirstDivis.value),
    getDivisors(numberSecondDivis.value)
  );

  resultLeastDivisor.innerHTML = `Результат: ${Math.min.apply(null, res)}`;

  numberFirstDivis.value = "";
  numberSecondDivis.value = "";
});
