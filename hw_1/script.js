/* 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода. */

/* const arr = [1, 5, 7, 9];
console.log(Math.min(...arr)); */

/* 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую. */

function createCounter() {
    let counter = 0;
    return {
        increment() {
            counter += 1;
        },
        decrement() {
            counter -= 1;
        },
        refund() {
            return counter;
        },
    };
}

const counterOne = createCounter();
const counterTwo = createCounter();

counterOne.increment();
counterOne.increment();
counterOne.increment();
counterOne.increment();
counterOne.decrement();
console.log(counterOne.refund());

counterTwo.increment();
counterTwo.decrement();
counterTwo.increment();
counterTwo.increment();
counterTwo.decrement();
console.log(counterTwo.refund());