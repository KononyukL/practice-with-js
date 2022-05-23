const text = document.querySelector("#text");
const wordCount = document.querySelector(".word-count");
const symbolCount = document.querySelector(".symbol-count");
const symbolCountWithout = document.querySelector(".symbol-count-without");
const percentSymbol = document.querySelector(".percent-symbol");
const elem1 = document.querySelector("#elem1");
const elem2 = document.querySelector("#elem2");
const elem3 = document.querySelector("#elem3");
const elem4 = document.querySelector("#elem4");

text.addEventListener("blur", () => {
  const arr = text.value.split(" ");
  const arr1 = text.value.split("");

  const sum = arr.reduce((acc, item) => {
    return (acc += item.length);
  }, 0);

  const symbolPerscent = arr1.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const showResult = (el, resEl, res) => {
    el.addEventListener("click", () => {
      if (el.checked) {
        resEl.innerHTML = ` ${res}`;
      } else {
        resEl.innerHTML = "";
      }
    });
  };

  showResult(elem1, wordCount, arr.length);

  showResult(elem2, symbolCount, arr1.length);

  showResult(elem3, symbolCountWithout, sum);

  elem4.addEventListener("click", () => {
    if (elem4.checked) {
      for (const key in symbolPerscent) {
        const li = document.createElement("li");
        li.innerHTML = `${key}: ${(
          (symbolPerscent[key] * 100) /
          arr1.length
        ).toFixed(2)}%`;
        percentSymbol.appendChild(li);
      }
    }
  });
});
