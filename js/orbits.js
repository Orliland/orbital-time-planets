const counter = document.querySelector(".counter__span");

const mercurio = document.querySelector(".mercurio");
const venus = document.querySelector(".venus");
const tierra = document.querySelector(".tierra");
const marte = document.querySelector(".marte");
const jupiter = document.querySelector(".jupiter");
const saturno = document.querySelector(".saturno");
const urano = document.querySelector(".urano");
const neptuno = document.querySelector(".neptuno");
const pluton = document.querySelector(".pluton");

let orbits = {
  mercurio: 0,
  venus: 0,
  tierra: 0,
  marte: 0,
  jupiter: 0,
  saturno: 0,
  urano: 0,
  neptuno: 0,
  pluton: 0,
};

function showOrbits() {
  mercurio.textContent = orbits.mercurio;
  venus.textContent = orbits.venus;
  tierra.textContent = orbits.tierra;
  marte.textContent = orbits.marte;
  jupiter.textContent = orbits.jupiter;
  saturno.textContent = orbits.saturno;
  urano.textContent = orbits.urano;
  neptuno.textContent = orbits.neptuno;
  pluton.textContent = orbits.pluton;
}

let dia = 0;
setInterval(function () {
  counter.textContent = dia;
  orbits.mercurio = Math.floor(dia / 88);
  orbits.venus = Math.floor(dia / 225);
  orbits.tierra = Math.floor(dia / 365);
  orbits.marte = Math.floor(dia / 687);
  orbits.jupiter = Math.floor(dia / 4329);
  orbits.saturno = Math.floor(dia / 10753);
  orbits.urano = Math.floor(dia / 30660);
  orbits.neptuno = Math.floor(dia / 58354);
  orbits.pluton = Math.floor(dia / 90411);
  showOrbits();
  dia += 1;
}, 10);
