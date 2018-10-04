/*=============================
=            РЕЛИЗ            =
=============================*/

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let temp_str = string.replace(/[^0-9.-]+/g,' ');
  let str = temp_str.replace(/-[^0-9]/, '');
  let numbers = str.split(' ').map(string=>parseFloat(string));
  let max = Math.max.apply(Math, numbers);
  let min = Math.min.apply(Math,numbers);
  return {min, max};
}
/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x<1)
  {
    return 0;
  }
 if (x===1)
  {
    return x;
  }
    return (fibonacciSimple(x-1)+fibonacciSimple(x-2));
}
/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
let cachedNumbers = [0, 1, 1];
function fibonacciWithCache(x) {
  
  if (cachedNumbers[x]===undefined)
  {
    cachedNumbers.push(fibonacciWithCache(x-1)+fibonacciWithCache(x-2));
  }
  return cachedNumbers[x];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  let rows = Math.floor((max+1)/cols);
  if ((max+1)%cols>0) rows++;
  let result = '';
  for (let i=0; i<rows; i++)
  {
    for(let j=i; j<=max; j+=rows) {
      if (j<10 && j>=rows) result+=' ';
      result+=' '+ j;
    }
    if(i<rows-1) result+='\n';
  }
  
return result;
}
/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let result = '';
  let count =1;
  for (let i=0; i<input.length; i++)
  {
    insert_str = input[i];
    while(input[i]===input[i+1] && i<input.length)
      {
        count++; i++;

      }
  result+=input[i];
  if (count>1) result+=count;
  count=1;}
  return result;
}
module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/*=====  End of РЕЛИЗ  ======*/

/*========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
========================================*/

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA() {
  let rnd = Math.round(Math.random() * (100) + 1);
  let win = false;
  while(!win)
  {
    input_number = Number(window.prompt('Введите число:'));
    if (input_number===rnd) {
      alert('В точку!');
      win = true;
    }
    else if (input_number>rnd) alert('Слишком много')
    else alert('Слишком мало');
  }
}
/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {
  let rnd = Math.round(Math.random() * (100) + 1);
  let result = 0;
  let win = false;
  let best = Number(document.getElementById('best_result').textContent);
  while(!win)
  {
    input_number = Number(window.prompt('Введите число:'));
    result++;
    if (input_number===rnd) {
      alert('В точку!');
      win = true;
    }
    else if (input_number>rnd) alert('Слишком много')
    else alert('Слишком мало');
  }
  if (best>result || best===0) best=result;
 document.getElementById('result').textContent = `Текущий результат: ${result} \nЛучший результат: `;
 document.getElementById('best_result').textContent = best;
  if(confirm("Сыграть еще?")){
    guessNumberB();
}
}

/*=====  End of НЕ ВОШЛО В РЕЛИЗ  ======*/