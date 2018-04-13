// finds repeated values in an array
const arrayHasRepetitions = (array, { numberOfRepetitions = 4, filter = [] }) => {

  for (let index = 0, repeatedValue, repetitions = 1; index < array.length - 1; index++) {
    const element = array[index];
    const nextElement = array[index + 1];

    // skip unwanted elements
    if (filter.includes(element)) {
      continue;
    }
    
    // if next element is equal to the current, increase repetitions
    if (nextElement === element) {
      repetitions++;
    } else {
      // next element is different, reset 
      repetitions = 1;
    }

    if (repetitions === numberOfRepetitions) {
      repeatedValue = element;
      return true;
    }
  }

  return false;
};


// creates a matrix prefilled with passed value param 
export const createMatrix = (rows, cols, value=0) => {
  return Array.from(Array(rows), () => Array(cols).fill(value));
}

// for each chunk (ie. column or row) of the matrix
// checks whether the matrix has any repetitions
export const matrixHasRepetitions = (matrix, { numberOfRepetitions = 4, filter = [] }) => {
  return matrix.some(chunk => arrayHasRepetitions(chunk, { numberOfRepetitions , filter }));
}

// returns a copy which is a transposed matrix of the original,
// i.e turns rows to columns and columns to rows
export const transposeMatrix = matrix => {
  const rows = matrix.length || 0;
  const cols = matrix[0] ? matrix[0].length : 0;

  let transposed = createMatrix(cols, rows);

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < cols; columnIndex++) {
      transposed[columnIndex][rowIndex] = matrix[rowIndex][columnIndex];
    }
  }

  return transposed;
}