'use strict';
let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let range4 = document.getElementById("range4");

let attaque = document.getElementById("attaque");
let defense = document.getElementById("defense");
let sante = document.getElementById("sante");
let vitesse = document.getElementById("vitesse");

let reset = document.getElementById("reset");
let aleatoire = document.getElementById("aleatoire");

attaque.innerHTML = range1.value;
defense.innerHTML = range2.value;
sante.innerHTML = range3.value;
vitesse.innerHTML = range4.value;

range1.addEventListener("input", function () {
    attaque.innerHTML = range1.value;
});

range2.addEventListener("input", function () {
    defense.innerHTML = range2.value;
});

range3.addEventListener("input", function () {
    sante.innerHTML = range3.value;
});

range4.addEventListener("input", function () {
    vitesse.innerHTML = range4.value;
});

reset.addEventListener("click", function () {
    attaque.innerHTML = 5;
    defense.innerHTML = 5;
    sante.innerHTML = 5;
    vitesse.innerHTML = 5;
});

aleatoire.addEventListener("click", function () {
    range1.value = Math.floor(Math.random() * 10) + 1;
    range2.value = Math.floor(Math.random() * 10) + 1;
    range3.value = Math.floor(Math.random() * 10) + 1;
    range4.value = Math.floor(Math.random() * 10) + 1;
    attaque.innerHTML = range1.value;
    defense.innerHTML = range2.value;
    sante.innerHTML = range3.value;
    vitesse.innerHTML = range4.value;
});