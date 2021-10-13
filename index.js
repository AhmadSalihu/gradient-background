const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const h3 = document.querySelector("h3");
const body = document.getElementById("body");


function setGradient() {
    body.style.background = `linear-gradient(to right, ${col1.value}, ${col2.value})`;

   h3.textContent = body.style.background + ", ";

};


col1.addEventListener("input", setGradient);

col2.addEventListener("input", setGradient);
