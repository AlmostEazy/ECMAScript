'use strict'

/* Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch 
для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается 
с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), 
функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, 
функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/ */

/* async function getUserData(ID) {
    const response = await fetch(`https://reqres.in/api/users?page=2&id=${ID}`);

    if (!response.ok) {
        throw new Error ('Error, user not found')   
    }

    return await response.json();
}

getUserData(7).then((user) => console.log(user.data));
getUserData(8).then((user) => console.log(user.data));
getUserData(9).then((user) => console.log(user.data));
getUserData(10).then((user) => console.log(user.data));
getUserData(11).then((user) => console.log(user.data));
getUserData(12).then((user) => console.log(user.data));
getUserData(123).then((user) => console.log(user.data));

// 2 вариант:

async function getUserData(ID) {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=2&id=${ID}`);

        if (response.ok) {
            const user = await response.json();
            console.log(user.data);
        } else {
            console.log(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
getUserData(7);
getUserData(8);
getUserData(9);
getUserData(10);
getUserData(11);
getUserData(12);
getUserData(123); */

/* Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch 
для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, 
или отклоняется в случае ошибки.

*Подсказка *

// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });
saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users 
с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), 
функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/ */

const user = {
    "name": "John Doe",
    "job": "unknown"
};

async function saveUserData(user) {
    const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error ('Error')   
    }

    return await response.json();
}

saveUserData(user).then((user1) => console.log(user1));

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });

  


// 2 вариант:

/* const user = {
    "name": "John Doe",
    "job": "unknown"
};

async function saveUserData(user) {
    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            console.log(await response.json());
        } else {
            console.log(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  }); */