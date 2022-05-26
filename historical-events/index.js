const input = document.querySelector("#input");
const table = document.querySelector("#table");

const obj = {
  1991: [
    {
      date: "24.09.1991",
      name: "Независимость Украины ",
      description: "Верховный Совет Украинской ССР провозгласил независимость Украины и «образование самостоятельного украинского государства — Украины»",
    },
    {
      date: "01.12.1991",
      name: " Первый президент Украины ",
      description: " Леонид Кравчук был избран президентом Украины на первых прямых президентских выборах",
    },
    {
      date: "08.12.1991",
      name: "Прекращении существования СССР",
      description: "Кравчук подписал с Президентом РСФСР Б. Н. Ельциным и председателем Верховного Совета Белорусской ССР С. С. Шушкевичем Беловежское соглашение о прекращении существования СССР и о создании СНГ.",
    },
  ],
  2010: [{
    date: "17.01.2010",
    name: "Президентские выборы в Украине ",
    description:'Состоялся первый тур президентских выборов на Украине, в результате которого победитель не был выявлен. 7 февраля был проведён второй тур выборов, в котором победу одержал лидер оппозиции Виктор Янукович'
  },
{
  date: "11.03.2010",
  name: " Новое правительство Украины ",
  description:'Было сформировано новое правительство во главе с Николаем Азаровым.'
}, 
{
  date: "16.11.2010",
  name: "Акции протеста против Налогового кодекса ",
  description:'Начались акции протеста против Налогового кодекса («налоговый майдан»), во многих городах проводились массовые митинги и протесты. На главной площади столицы собралось около 20 тысяч митингующих..'
}],
  2014: [{
    date: "24.02.2014",
    name: " Виктор Янукович покинул Украину ",
    description:'отстранённый президент Виктор Янукович покинул Украину и был доставлен на территорию России'
  }, 
{
  date: "12.05.2014",
  name: " Референдум",
  description:'В соответствии с результатами состоявшихся 11 мая референдумов, руководство самопровозглашённых Донецкой и Луганской республик объявило о независимости.'
}, 
{
  date: "25.05.2014",
  name: "Внеочередные выборы президента Украинывое правительство Украины ",
  description:'Прошли внеочередные выборы президента Украины. Всего в выборах участвовало 23 кандидата. Победу в первом туре одержал Пётр Порошенко, набравший 54,7 % голосов.'
}],
};





input.addEventListener("keydown", () => {
  if (event.code === "Enter" && obj[input.value]) {


    obj[input.value].forEach(element => {
      const tr = document.createElement('tr')
      
     for (const key in element) {
    
      
       const td = document.createElement('td')
       td.innerHTML = element[key]
       tr.appendChild(td)
     }



      table.appendChild(tr)
    });
  }
});