// Задание 1

const checkLength = (string, length) => string.length <= length;
console.log(checkLength('проверяемая строка', 20)); // true
// console.log(checkLength('проверяемая строка', 18)); // true
// console.log(checkLength('проверяемая строка', 10)); // false

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
// console.log(checkPalindrom('ДовОд')); // true
// console.log(checkPalindrom('Кекс')); // false
// console.log(checkPalindrom('Лёша на полке клопа нашёл')); // true

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
// console.log(parseNumber('3222 какой 777 то левый 34 текст')); // 322277734

// Задание 5.2


const splitTime = (time) => {
  const timeArray = time.split(':');
  const hourToMinute = () => {
    let workInMinute = 0;
    for (let i = 0; i < timeArray.length; i += 2) {
      workInMinute = timeArray[i] * 60;
      for (i = 1; i < timeArray.length; i += 2) {
        workInMinute += +timeArray[i];
      }
    }
    return workInMinute;
  };
  return hourToMinute;
};

const checkTime = (startWorkDay, endWorkDay, startMeet, timeMeet) => splitTime(startMeet) + timeMeet <= splitTime(endWorkDay) && splitTime(startMeet) + timeMeet >= splitTime(startWorkDay);

console.log(checkTime('08:00', '17:30', '14:00', 90)); // true
console.log(checkTime('8:0', '10:0', '8:0', 120)); // true
console.log(checkTime('08:00', '14:30', '14:00', 90)); // false
console.log(checkTime('14:00', '17:30', '08:0', 90)); // false
console.log(checkTime('8:00', '17:30', '08:00', 900)); // false

