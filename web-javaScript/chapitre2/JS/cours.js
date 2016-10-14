var titreEl = document.getElementsByTagName("h2");

console.log(titreEl[0]);
console.log(titreEl[1]);
console.log(titreEl[2]);
console.log(titreEl.length);

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}