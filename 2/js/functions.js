// Задание 1

const checkLength = (string, length) => string.length <= length;
console.log(checkLength('проверяемая строка', 20)); // true
console.log(checkLength('проверяемая строка', 18)); // true
console.log(checkLength('проверяемая строка', 10)); // false

// Задание 2

const checkPalindrom = (string) => {
  string = string.replaceAll(' ', '');
  let stringReverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
  }

  if (string.toUpperCase() === stringReverse.toUpperCase()) {
    return true;
  }
  return false;
};

console.log(checkPalindrom('топот')); // true
console.log(checkPalindrom('ДовОд')); // true
console.log(checkPalindrom('Кекс')); // false
console.log(checkPalindrom('Лёша на полке клопа нашёл')); // true

// Задание 3


const parseNumber = (string) => {
  let stringNumber = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(Number(string[i])) && string[i] !== ' ') {
      stringNumber += string[i];
    }
  }
  return stringNumber;
};

console.log(parseNumber('3222 какой - то левый текст')); // 3222
console.log(parseNumber('3222 какой 777 то левый 34 текст')); // 322277734
