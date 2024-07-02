// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [10, 5, 7, 9];

console.log(Math.min(...arr));



// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function counter() {
  let value = 0;
  function add() {
    value ++;
  }
  function subtract() {
    value --;
  }
  function getCounter() {
    return value;
  }
  return { add, subtract, getCounter };
}

const userCount = counter();
console.log(userCount.getCounter());
userCount.add();
console.log(userCount.getCounter());
userCount.add();
console.log(userCount.getCounter());
userCount.subtract();
console.log(userCount.getCounter());


// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


// const serchElement = [];
// function findElementByClass(rootEl, classEl) {
//   if (rootEl.hasChildNodes()) {
//     for (let element of rootEl.children) {
//       if (rootEl.classList.contains(classEl)) {
//         serchElement.push(element);
//         if (serchElement[0].className !== classEl) {
//           serchElement.unshift(element);
//         }
//       }
//       findElementByClass(element, classEl);
//     }
//   }
//   return serchElement[0];
// }

function findElementByClass(rootEl, classEl) {
  if (rootEl.classList.contains(classEl)) {
    return rootEl;
  }
  for (const child of rootEl.children) {
    const findedElem = findElementByClass(child, classEl);
    if (findedElem) {
      return findedElem;
    }
  }
  return null;
}

const rootElement = document.getElementById('root');
console.log(rootElement);
const targetElement = findElementByClass(rootElement, 'paragraph3');
console.log(targetElement);
const targetElement1 = findElementByClass(rootElement, 'link2');
console.log(targetElement1);
const targetElement2 = findElementByClass(rootElement, 'class4');
console.log(targetElement2);


