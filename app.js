// GET THE TWO INPUTS FROM THE HTML FILE
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');

const results = document.getElementById('results');

// ADD EVENT LISTENER TO CALC BUTTON
calc.addEventListener("click", function() {
    // CHANGE INPUT VALUE FROM STRING TO NUMBER
    const valOne = parseInt(ip1.value);
    const valTwo = parseInt(ip2.value);
    // ADD THE VALUES TOGETHER AND INSERT TO HTML
    results.innerHTML = valOne + valTwo;
});

// CLEAR INPUT
clr.addEventListener("click", function() {
    results.innerHTML = "";
    ip1.value = "";
    ip2.value = "";
});

rand.addEventListener("click", function() {
    ip1.value = random();
    ip2.value = random();

});

function random() {
    return Math.floor(Math.random() * 1000);
}