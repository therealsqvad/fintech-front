/* =============================
=            РЕЛИЗ            =
============================= */

/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}
/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  const oldArgs = args;

  return function() {
    const newArg = [].slice.call(arguments);
    const Args = [].concat(oldArgs, newArg);

    return func.apply(context, Args);
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  if (arguments.length > 0) {
    return (y) => {
      if (y!==undefined) {
        return sum(x+y)
      }
      return x;
    }
  }
  return 0;
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  let isAnagram = false;
  first.toLowerCase;
  second.toLowerCase;

  let arrOfFirst = [...first];
  let arrOfSecond = [...second];
  arrOfFirst.sort();
  arrOfSecond.sort();
  for (let i =0; i<=arrOfFirst.length && arrOfFirst.length === arrOfSecond.length; i++) {
    if (arrOfFirst[i]===arrOfSecond[i]) {
      isAnagram=true;
    } 
    else {
      isAnagram=false;
      break;
    }
  }
  return isAnagram;
}
/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  arr.sort((a, b) => a-b);
  return Array.from(new Set(arr));
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  let outArr = [];
  for (let i=0; i<=second.length; i++)
  if (first.indexOf(second[i])!==-1) {
    outArr.push(second[i]);   
  }
  outArr.sort((a,b) => a-b);
  return outArr;
}
/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  let count_replace=0;
  for (let i = 0; i<=left.length && left.length===right.length; i++){
    if (left[i]!==right[i]) {
      count_replace++;
    }
  }
    if (count_replace>1 || left.length!==right.length ){
      return false;
    }
    else {
      return true;
    }
}
console.log(isIsomorphic('help', 'hell yeah'));

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
