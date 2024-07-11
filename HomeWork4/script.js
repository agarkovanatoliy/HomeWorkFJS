// Домашнее задание

// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

const url = 'https://reqres.in/api/users?page=2';

async function getUserData(ID) {
  const responce = await fetch(url);
  const users = await responce.json();
  if (responce.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    const user = users.data.find((el) => el.id === ID);
    console.log(user === undefined ? "Пользователь не найден" : user);
  }
}
getUserData(10);
getUserData(25);


// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

async function saveUserData(user, url) {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error("Что-то пошло не так: " + response.status);
  } else {
    console.log(response.status);
  }
}
const user = {
  name: "John Smith",
  age: 30,
  email: "john@example.com",
};
const url1 = "https://reqres.in/api/users";
const url2 = "https://reqres.in/a";

saveUserData(user, url1)
  .then(() => {
    console.log("Данные пользователя успешно сохранены");
  })
  .catch((error) => {
    console.log(error.message);
  });

saveUserData(user, url2)
  .then(() => {
    console.log("Данные пользователя успешно сохранены");
  })
  .catch((error) => {
    console.log(error.message);
  });


// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
  changeStyleDelayed("my-element", 2000);
});
function changeStyleDelayed(nameClass, time) {
  const divEl = document.querySelector(`.${nameClass}`);
  setTimeout(() => {
    divEl.classList.toggle("colorBlue");
  }, time);
}