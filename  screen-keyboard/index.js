/*Pеализуем экранную клавиатуру. На ней должны быть кнопочки
        со всеми буквами и цифрами клавиатуры компьютера.
        Кликая мышкой по этим кнопочкам мы сможем вводить данные.*/
        let keys = document.querySelectorAll("#keyboard #row div"); //whole keyboard
        let input = document.querySelector("input");
  
        let symb = [
          "ё",
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          0,
          "(",
          ")",
          "&larr;",
          "Tab",
          "й",
          "ц",
          "у",
          "к",
          "е",
          "н",
          "г",
          "ш",
          "щ",
          "з",
          "х",
          "ъ",
          "/",
          "Caps Lock",
          "ф",
          "ы",
          "в",
          "а",
          "п",
          "р",
          "о",
          "л",
          "д",
          "ж",
          "э",
          "Shift",
          "я",
          "ч",
          "с",
          "м",
          "и",
          "т",
          "ь",
          "б",
          "ю",
          ",",
          ".",
        ];
  
        for (let key of keys) {
          let span = document.createElement("span");
          span.innerHTML = symb.splice(0, 1);
          span.classList.add("key_symb");
          key.appendChild(span);
  
          //cursor on the button
          key.addEventListener("mouseover", function () {
            this.classList.add("active_button");
            key.addEventListener("mouseout", () =>
              this.classList.remove("active_button")
            );
          }); 
  
          key.addEventListener("click", function () {
            //add text to input
            if (
              !key.classList.contains("caps_lock") &&
              !key.classList.contains("shift")
            ) {
              if (key.classList.contains("space")){
                input.value += ' ';
              } 
              else if (key.classList.contains("backspace")) {
                input.value = input.value.slice(0, -1);
              }
              else if(key.classList.contains("tab")) {
                input.value += '    ';
              }
              else {
                input.value += span.innerHTML;
              }
            }
            //change to uppercase
            if (key.classList.contains("caps_lock")) {
              for (let key of keys) {
                if (
                  key.firstChild.innerHTML.toUpperCase() ==
                  key.firstChild.innerHTML
                ) {
                  key.firstChild.innerHTML = key.firstChild.innerHTML.toLowerCase();
                } else {
                  if (
                    !key.classList.contains("caps_lock") &&
                    !key.classList.contains("tab") &&
                    !key.classList.contains("shift")
                  ) {
                    key.firstChild.innerHTML = key.firstChild.innerHTML.toUpperCase(); 
                  }
                }
              }
            }
            
          });
        }