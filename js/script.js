//while (состояние) {
    // код
    // также называемый "телом цикла"
  //}

//while (i < 101) { //выводим числа от 1 до 100.
    //console.log(i);
    //i++;
//}

var i = 10;

//краткий вариант записи while != 0;
while (i) {//когда i будет равно 0, условие станет ложным, и цикл остановится
    console.log(i);
    i--;
}

//Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}:
//while (i) console.log(i--);//это дало нам тот же самый результат, что и в прошлый раз.

    //Цикл "do...while"

//do {
    // тело цикла
//} while (состояние);

//тот же результат, что и в прошлый раз.

var j = 10;

do {
    console.log(j);//вывод i
    j--;//i в обратном порядке
} while (j > 0);//пока i не равно 0;
//var i = 10;
    //Цикл for.

    //for (начало; условие; шаг) {
    // ... тело цикла ...
  //}

for (var i = 10; i > 0; i--) {//запись прошлых результатов с помощью цикла for.
    console.log(i);//вывод чисел 10, 9, 8...1
}

        //Рассмотрим конструкцию for подробней:

        //часть	

//начало	i = 10	Выполняется один раз при входе в цикл
//условие	i < 0	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
//шаг	i--	Выполняется после тела цикла на каждой итерации перед проверкой условия.
//тело	console.log(i)	Выполняется снова и снова, пока условие вычисляется в true.

    //В целом, алгоритм работы цикла выглядит следующим образом:

//Выполнить *начало*
//→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
//→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
//→ (Если *условие* == true → Выполнить *тело*, Выполнить *шаг*)
//→ ...

    //Вот в точности то, что происходит в нашем случае:

// for (var i = 10; i < 0; i--) console.log(i)

// Выполнить начало
//var i = 10;
// Если условие == true → Выполнить тело, Выполнить шаг
//if (i < 0) { console.log(i); i-- }
// Если условие == true → Выполнить тело, Выполнить шаг
//if (i < 0) { console.log(i); i-- }
// Если условие == true → Выполнить тело, Выполнить шаг
//if (i < 0) { console.log(i); i-- }
// ...конец, потому что теперь i == 0;

//Встроенное объявление переменной
//В примере переменная счётчика i была объявлена прямо в цикле. Это так называемое «встроенное» объявление переменной. Такие переменные существуют только внутри цикла.

//for (let i = 10; i > 0; i--) {
  //console.log(i); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//}
//console.log(i); // ошибка, нет такой переменной

//Вместо объявления новой переменной мы можем использовать уже существующую:

//var i = 0;

//for (i = 10; i > 0; i--) { // используем существующую переменную
  //console.log(i); // 0, 1, 2
//}

//console.log(i); // 3, переменная доступна, т.к. была объявлена снаружи цикла

//Пропуск частей «for»

//Любая часть for может быть пропущена.

//Для примера, мы можем пропустить начало если нам ничего не нужно делать перед стартом цикла.

//Вот так:

//var i = 10; // мы уже имеем объявленную i с присвоенным значением

//for (; i > 0; i--) { // нет необходимости в "начале"
  //console.log(i); // 10, 9, 8...1
//}

//Можно убрать и шаг:

var i = 10;

for (; i > 0;) {
  alert( i-- );
}

//Это сделает цикл аналогичным while (i > 0)

//Вот запись одного и того же вывода чисел в консоль при помощи разных циклов. 
//Урок сделан по руководству учебника https://learn.javascript.ru/