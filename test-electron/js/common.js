//"use sctrict";



/*условия
const num = 50;
switch (num) {
    case 49:
        console.log('Не верно');
        break;

    case 100:
        console.log('Не верно');
        break;

    case 48:
        console.log('В точку');
        break;

    default:
        console.log('Не в этот раз');
        break;
}




const namber0fFilms = +prompt('Скольо фильмов вы посмотрели', "");

const personalMovieDB = {
    count: namber0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('один из последних промотреных фильмов', ""),
    b = prompt('На сколько отцените его', ""),
    c = prompt('один из последних промотреных фильмов', ""),
    d = prompt('На сколько отцените его', "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

Циклы

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;

    }

    console.log(i);
}*/

//Применяем условия и циклы

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
/*
const namber0fFilms = +prompt('Скольо фильмов вы посмотрели', "");

const personalMovieDB = {
    count: namber0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
*/


//Стрелочные функции
/*
let num = 20;

function showFirsMessege(text) {
    console.log("text");
    console.log(num);
}

showFirsMessege("Hello world");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 5));
//ответ 7,11,15

function ret() {
    let num = 50;



    return (num);
}
const anotherNum = ret();
console.log("anotherNum");

const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => a + b; */

//Методы и свойства строк и чисел

/*const str = "text";  // масивы
  const arr = [1, 2, 4];

  console.log(arr,length);

  const fruit = "some fruit";
  console.log(fruit.indexOf("fruit")); //Поиск строки

  const logg = "Hello world";
  console.log(logg.slice(6, 10));
  //метод slice вырезает кусок кода который мы хотим,тоесть 6 это начало 10 это конец итог=world!

  console.log(logg.substring(-6, -10)); // в обратном порядке
  console.log(logg.substr(6, 10)); //от нужного куска кода и до скольки букф

//Цифры

const num = 12.2;
console.log(Math.round(num));// Math.round для округления чисел


Метод

const test = "12.2px";
console.log(parseInt(test)); // Переводит число в другую систему чисел выводит число 12
console.log(parseFloat(test)); // Возвращает нам число 12,2*/




//Практика используем функции


/*Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

/*'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

detectPersonalLevel();



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();*/


//Callback
/*"use strict";

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log('Я учу: ${lang}');
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);*/



//Деструктуризация объектов
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }

};

options.makeTest();

const {border, bg} = options.colors;
console.log(border); */

//Масивы и псевдомасивы

/*
"use sctrict";

/*
const arr = [2, 3, 6, 8, 10];

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});



const arr = [2, 13, 26, 10, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}*/

//Оператор spread 
/*
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]; //массив данных

log(...num); // Лог оператора разворота

// Создания поверхностной копии объекта

const arry = ("a", "b");

const newArry = [...arry]; */

// Основы ООП Объектно орентированое програмирование
/*
"use sctrict";

const soldier = {  //создаем переменую солдат
    health: 400,  // свойство жизнь 
    armor: 100,   //свойство Броня
    sayHello: function() {  
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);  //Создаем рядового Джон

jonh.sayHello(); */

// Практика

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
/*
'use strict';

const personalMovieDB = {  //Объект
    count: 0,
    movies: {}, //Свойство
    actors: {},
    genres: [],
    privat: false,
    start: function () {  //Метод
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
}; */

