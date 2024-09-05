// * An analyzeArray function that takes an array of numbers and returns an
// * object with the following properties: average, min, max, and length.

export function analyzeArray(array) {
  const arrayInfo = {};

  arrayInfo.average =
    array.reduce((sum, current) => sum + current, 0) / array.length;

  arrayInfo.min = array[0];
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i + 1] < arrayInfo.min) arrayInfo.min = array[i + 1];
  }

  arrayInfo.max = array[0];
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i + 1] > arrayInfo.max) arrayInfo.max = array[i + 1];
  }

  arrayInfo.length = array.length;

  return arrayInfo;
}
