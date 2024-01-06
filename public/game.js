const inp = document.querySelectorAll("input"); // Select all input fields

inp.forEach(function (input) {
  input.addEventListener("input", function () {
    const inputValue = parseInt(input.value, 10);

    if (Number.isInteger(inputValue) && inputValue >= 1 && inputValue <= 9) {
      let uno = 0;
    } else {
      input.value = "";
    }
  });
});
const ar = [];
// let fais = "no";
button = document.querySelector("button");
button.addEventListener("click", () => {
  let i = 0;
  ar.length = 81;
  for (x of inp) {
    if (x.value) {
      ar[i] = parseInt(x.value);
      i++;
    } else {
      ar[i] = 0;
      i++;
    }
  }
  create2DArray(ar);
});
const right = [3, 12, 21, 6, 9, 15, 18, 24, 27, 57, 60, 63, 66, 69, 72, 75, 78, 81, 30, 39, 48, 33, 36, 51, 54, 57, 42, 45, 48];

let i = document.querySelectorAll("input");
let p = 1;
for (x of i) {
  x.name = p;
  p++;
}

for (x of right) {
  for (l of i) {
    let z = parseInt(l.name);
    if (z == x) {
      l.classList.add("right");
    }
  }

}
const bottom = [19, 20, 21, 22, 23, 24, 25, 26, 27, 46, 47, 48, 49, 50, 51, 52, 53, 54, 73, 74, 75, 76, 77, 78, 79, 80, 81];
for (x of bottom) {
  for (l of i) {
    let z = parseInt(l.name);
    if (z == x) {
      l.classList.add("bottom");
    }
  }
}
const left = [1, 10, 19, 55, 64, 73, 28, 37, 46];
for (x of left) {
  for (l of i) {
    let z = parseInt(l.name);
    if (z == x) {
      l.classList.add("left");
    }
  }
}


// function sarray(arr){
//   let p=0;
//   for (let i=0;i<9;i++){
//     for(let j=0;j<9;j++){
//       array[i][j].push(arr[p]);
//       p++;
//     }
//   }
//   console.log(array);
// }
// sarray(bottom);
function create2DArray(arr) {
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
    console.log("Solution found:");
    console.log(result);
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

