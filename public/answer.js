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

function print(s) {
  for (let i = 0; i < 9; i++) {
    let row = "";
    for (let j = 0; j < 9; j++) {
      row += s[i][j] + "  ";
    }
    console.log(row);
  }
}

const s = [
  [0, 0, 8, 0, 0, 0, 0, 0, 0],
  [4, 9, 0, 1, 5, 7, 0, 0, 2],
  [0, 0, 3, 0, 0, 4, 1, 9, 0],
  [1, 8, 5, 0, 6, 0, 0, 2, 0],
  [0, 0, 0, 0, 2, 0, 0, 6, 0],
  [9, 6, 0, 4, 0, 5, 3, 0, 0],
  [0, 3, 0, 0, 7, 2, 0, 0, 4],
  [0, 4, 9, 0, 3, 0, 0, 5, 7],
  [8, 2, 7, 0, 0, 9, 0, 1, 3],
];
