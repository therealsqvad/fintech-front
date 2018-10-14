/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((res, rej) => {
    const promiseOk = [];
    let currentLength = promises.length;

    if (currentLength === 0) {
      res(promiseOk);
    }
    for (let i = 0; i < currentLength; i++) {
      promises[i].then(resolve => {
        promiseOk[i] = resolve;
        currentLength--;
        if (currentLength === 0) {
          res(promiseOk);
        }
      },
      reject => {
        rej(reject);
      });
    }
  });
}

module.exports = promiseAll;
