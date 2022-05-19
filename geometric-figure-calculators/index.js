// helpers
const onClick = (el, fn) => {
  el.addEventListener("click", fn);
}

const showRes = res => `Результат: ${res}`


// Сделайте калькулятор, который будет находить площадь и периметр квадрата.
const squareArea = document.querySelector(".square-area");
const squareResult = document.querySelector(".square-result");
const square = document.querySelector(".square");
const squarePerimeter = document.querySelector(".square-perimeter");

onClick(squareArea, () => {
  const result = square.value * square.value;
  squareResult.innerHTML = showRes(result);
  square.value = "";
});

onClick(squarePerimeter, () => {
  const result = 4 * square.value;
  squareResult.innerHTML = showRes(result);
  square.value = "";
});

// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

const rectangleLength = document.querySelector("#rectangle-length");
const rectangleWidth = document.querySelector("#rectangle-width");
const rectangleArea = document.querySelector(".rectangle-area");
const rectanglePerimeter = document.querySelector(".rectangle-perimeter");
const rectangleResult = document.querySelector(".rectangle-result");

onClick(rectangleArea, () => {
  const result = rectangleWidth.value * rectangleLength.value;
  rectangleResult.innerHTML = showRes(result);
  rectangleWidth.value = "";
  rectangleLength.value = "";
});

onClick(rectanglePerimeter, () => {
  const result = 2 * (+rectangleLength.value + +rectangleWidth.value);

  rectangleResult.innerHTML = showRes(result);
  rectangleWidth.value = "";
  rectangleLength.value = "";
});

// Сделайте калькулятор, который будет находить площадь круга и длину окружности.

const radiusCircle = document.querySelector("#radius-circle");
const circleArea = document.querySelector(".circle-area");
const circleCircumference = document.querySelector(".circle-circumference");
const circleResult = document.querySelector(".circle-result");

onClick(circleArea, () => {
  const result = (Math.PI * radiusCircle.value) ** 2;
  circleResult.innerHTML = showRes(result.toFixed(2));
  radiusCircle.value = "";
});

onClick(circleCircumference, () => {
  const result = 2 * Math.PI * radiusCircle.value;

  circleResult.innerHTML = showRes(result.toFixed(2));
  radiusCircle.value = "";
});

//Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

const lengthA = document.querySelector("#length-a");
const lengthB = document.querySelector("#length-b");
const lengthC = document.querySelector("#length-c");
const trigonArea = document.querySelector(".trigon-area")
const trigonResult = document.querySelector(".trigon-result")

onClick(trigonArea, ()=> {
const perimeter = (+lengthA.value + +lengthB.value + +lengthC.value) / 2;

const result = Math.sqrt(perimeter * (perimeter - +lengthA.value)*(perimeter - +lengthB.value)*(perimeter - +lengthC.value));;
trigonResult.innerHTML = showRes(result.toFixed(2));
lengthA.value = '';
lengthB.value = '';
lengthC.value = '';
})
