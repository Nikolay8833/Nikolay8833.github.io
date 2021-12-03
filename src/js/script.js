"use strict"

let siteType = [
   ["Сайт визитка", "Срок выполнения: 2 дня", "Стоимость: 2000 рублей" ],
   ["Интернет магазин", "Срок выполнения: 3 дня", "Стоимость: 3000 рублей" ],
   ["Корпоративный cайт", "Срок выполнения: 4 дня", "Стоимость: 4000 рублей" ]
];

let designType = [
   ["Шаблонный дизайн", "Срок выполнения: 2 дня", "Стоимость: 2000 рублей" ],
   ["Органический дизайн", "Срок выполнения: 3 дня", "Стоимость: 3000 рублей" ],
   ["Уникальный дизайн", "Срок выполнения: 4 дня", "Стоимость: 4000 рублей" ]
];

let siteAdaptive = [
   ["Не адаптивный сайт", "Стоимость: 0 рублей"],
   ["Адаптивный сайт", "Срок выполнения: 3 дня", "Стоимость: 3000 рублей" ],
];

let siteTypePrompt = prompt("Какой вам нужен тип сайта? Введите цифру:", "1 - Сайт визитка, 2 - Интернет магазин, 3 - Корпоративный cайт");

if(siteTypePrompt == 1) {
   siteTypePrompt = 2000;
   alert(siteType[0]);
} else if(siteTypePrompt == 2) {
   siteTypePrompt = 3000;
   alert(siteType[1]);
} else if(siteTypePrompt == 3) {
   siteTypePrompt = 4000;
   alert(siteType[2]);
} else {
   alert("Неправильный ввод");
};

let designTypePrompt = prompt("Какой вам нужен дизайн? Введите цифру:", "1 - Шаблонный дизайн, 2 - Органический дизайн, 3 - Уникальный дизайн");

if(designTypePrompt == 1) {
   designTypePrompt = 2000;
   alert(designType[0]);
} else if(designTypePrompt == 2) {
   designTypePrompt = 3000;
   alert(designType[1]);
} else if(designTypePrompt == 3) {
   designTypePrompt = 4000;
   alert(designType[2]);
} else {
   alert("Неправильный ввод");
};

let siteAdaptivePrompt = prompt("Нужен ли вам адаптивный сайт? Введите цифру:", "1 - Не адаптивный сайт, 2 - Адаптивный сайт");

if(siteAdaptivePrompt == 1) {
   siteAdaptivePrompt = 0;
   alert(siteAdaptive[0]);
} else if(siteAdaptivePrompt == 2) {
   siteAdaptivePrompt = 3000;
   alert(siteAdaptive[1]);
} else {
   alert("Неправильный ввод");
};

let total = (siteTypePrompt + designTypePrompt + siteAdaptivePrompt);

alert("Общая стоимость сайта: " + total + " рублей.");