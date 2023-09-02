function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let summ = arr.reduce((acc, current) => acc + current);
  let avg = Number((summ / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let summ = arr.reduce(function (accum, current) {
    return accum + current;
  }, 0)
  return summ;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let maxEl = Math.max(...arr);
  let minEl = Math.min(...arr);
  let differentEl = maxEl - minEl;
  return differentEl;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }
  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  })
  if (countEvenElement === 0) {
    return 0;
  }
  return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}