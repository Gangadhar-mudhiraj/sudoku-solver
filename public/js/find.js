module.exports= create2DArray=(arr)=> {
    const result = new Array(9).fill().map(() => new Array(9).fill());
    let row = 0;
    let col = 0;
    for (let i = 0; i < arr.length; i++) {
      result[row][col] = arr[i];
      if (col === 8) {
        col = 0;
        row++;
      } else {
        col++;
      }
    }
    // console.log(result);
    if (su(result, 0, 0)) {
      return(result);
    } else {
      console.log("No solution exists.");
    }
  }
  function su(s, i, j) {
    // Base case
    if (i === 9) {
      return true;
    }
    let nextRow = i,
      nextCol = j + 1;
    if (j + 1 === 9) {
      nextRow = i + 1;
      nextCol = 0;
    }
    if (s[i][j] !== 0) {
      return su(s, nextRow, nextCol);
    }
    for (let di = 1; di < 10; di++) {
      if (issafe(s, i, j, di)) {
        s[i][j] = di;
        if (su(s, nextRow, nextCol)) {
          return true;
        }
        s[i][j] = 0;
      }
    }
    return false;
  }
  
  function issafe(s, row, col, d) {
    for (let i = 0; i < 9; i++) {
      if (s[i][col] === d) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (s[row][i] === d) {
        return false;
      }
    }
    const sr = Math.floor(row / 3) * 3;
    const sc = Math.floor(col / 3) * 3;
    for (let i = sr; i < sr + 3; i++) {
      for (let j = sc; j < sc + 3; j++) {
        if (s[i][j] === d) {
          return false;
        }
      }
    }
    return true;
  }
//   const sudoku = [
//     3, 0, 6, 5, 0, 8, 4, 0, 0,
//     5, 2, 0, 0, 0, 0, 0, 0, 0,
//     0, 8, 7, 0, 0, 0, 0, 3, 1,
//     0, 0, 3, 0, 1, 0, 0, 8, 0,
//     9, 0, 0, 8, 6, 3, 0, 0, 5,
//     0, 5, 0, 0, 9, 0, 6, 0, 0,
//     1, 3, 0, 0, 0, 0, 2, 5, 0,
//     0, 0, 0, 0, 0, 0, 0, 7, 4,
//     0, 0, 5, 2, 0, 6, 3, 0, 0
//   ];
// create2DArray(sudoku);