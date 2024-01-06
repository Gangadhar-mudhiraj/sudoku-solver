let inp = document.querySelector("input");
let button = document.querySelector("button");
let z = "";
let cxd = [];
button.addEventListener("click", () => {
    z = inp.value;
    let i = 0;
    for (x of z) {
        cxd[i] = x;
        i++;
    }
    console.log(cxd);
});