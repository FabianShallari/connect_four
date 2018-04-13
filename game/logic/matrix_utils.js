/*
  Checks whether the passed array has consecutive repeated elemets of any value
 */
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


/*
  Creates a matrix with dimesions [rows] x [cols], prefilled with value  
*/
export const createMatrix = (rows, cols, value=0) => {
  return Array.from(Array(rows), () => Array(cols).fill(value));
}

/*
  Checks whether each row (chunk) of the matrix has any repeated values
 */
export const matrixHasRepetitions = (matrix, { numberOfRepetitions = 4, filter = [] }) => {
  return matrix.some(chunk => arrayHasRepetitions(chunk, { numberOfRepetitions , filter }));
}

/*
  Creates a copy of the original matrix which contains all the diagonals
  of the original

  Example:
  [ [ 1 , 2 ],        [ [ 1 ]
    [ 3 , 4 ],    =>    [ 3 , 2 ] 
    [ 5 , 6 ] ]         [ 5 , 4 ]
                        [ 6 ] ]
*/
export const matrixDiagonals = matrix => {

  const rows = matrix.length || 0;
  const cols = matrix[0] ? matrix[0].length : 0;
  
  const lastColIndex = cols - 1;
  const lastRowIndex = rows - 1;
  const maxIndexSum = lastRowIndex + lastColIndex;

  let diagonals = [];
  for (let indexSum = 0; indexSum <= maxIndexSum; indexSum++) {
    let diagonal = [];
    
    for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
        const columnIndex = indexSum - rowIndex;   
        const element = matrix[rowIndex][columnIndex];

        if (element) {
          diagonal.push(element);
        }
    }

    diagonals.push(diagonal);
  }

  return diagonals;
}

/* 
  Returns a rotated copy of the original matrix
  Rotation is 90 degrees clockwise

  Example: 
  [ [ 1 , 2 ],        [ [ 5 , 3 , 1 ]
    [ 3 , 4 ],    =>    [ 6 , 4 , 2 ] ]
    [ 5 , 6 ] ]  
*/
export const rotateMatrix = matrix => {
  return transposeMatrix(matrix).map(row => row.reverse());
}

/*
  Return a transposed copy of the original matrix

  Example: 
  [ [ 1 , 2 ],        [ [ 1 , 3 , 5 ]
    [ 3 , 4 ],    =>    [ 2 , 4 , 6 ] ]
    [ 5 , 6 ] ]         
*/
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