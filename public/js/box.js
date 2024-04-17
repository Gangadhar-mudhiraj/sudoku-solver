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
button = document.querySelector(".save");

// button.addEventListener("click", () => {
//   let i = 0;
//   ar.length = 81;
//   for (x of inp) {
//     if (x.value) {
//       ar[i] = parseInt(x.value);
//       i++;
//     } else {
//       ar[i] = 0;
//       i++;
//     }
//   }
//   let res = create2DArray(ar);
//   let ans = into1D(res);
//   addvalue(ans);
// });
const right = [
  3, 12, 21, 6, 9, 15, 18, 24, 27, 57, 60, 63, 66, 69, 72, 75, 78, 81, 30, 39,
  48, 33, 36, 51, 54, 57, 42, 45, 48,
];

let i = document.querySelectorAll("input");
let p = 1;
for (x of i) {
  x.name = p;
  p++;
}
function ansclas(isnot) {
  if (isnot == false) {
    button.classList.add(isnot);
  }
}
for (x of right) {
  for (l of i) {
    let z = parseInt(l.name);
    if (z == x) {
      l.classList.add("right");
    }
  }
}
const bottom = [
  19, 20, 21, 22, 23, 24, 25, 26, 27, 46, 47, 48, 49, 50, 51, 52, 53, 54, 73,
  74, 75, 76, 77, 78, 79, 80, 81,
];
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
const result = new Array(9).fill().map(() => new Array(9).fill(0));
