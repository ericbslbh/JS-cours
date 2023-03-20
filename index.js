// alert("salut JS");

// pour taper console.log, juste taper log et entrer 
console.log("coucou");

let variable = "Hello";

console.log(variable);

// une variable est un espace de stockage ; une boite 
let maSuperVariable = "Hello";

// les variables
var unTexte = "voici un texte";

console.log("unTexte");

// une constante est une donnée qui ne bouge pas 
const prenom = "Justine";

console.log(prenom);

// par contre avec let , la variable PEUT bouger. Exemple : 
let unChiffre = 24;

unChiffre = 22;

console.log(unChiffre);

// pour les chaines de caractère on peut utiliser simple ou double guillemet 
let chaine = 'je suis une chaine de caractère';

// concaténation
let nouvelleChaine = "chaine précédente : " + chaine + ". Voilà c'était le contenu";

console.log(nouvelleChaine);

// TYPES DE DONEEES

let string = "je suis une chaine de caractère";
let number = 24
let boolean = true 
// pas de guillemet sinon c'est une chaine de carac. c'est true or false

// Tableau : il y a des crochets
let array = ["je", "suis", 47, true]

// Objet => c'est une accolade {}
let object = {
    prenom: "audrey",
    age: 33,
    ville: "bordeaux"
}

// LES OPERATEURS
console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
// puissance
console.log(4 ** 5);

// opérateurs d'affectation
let total = 0;
total ++;
// ++ permet de faire +1

total += 5;
// += x permet de faire + x ; donc -= et *= marchent aussi

console.log(total);

// Structures de contrôles
let x = 2;
let y = 2;

// if (x > y) {
//     alert("YES x plus gros que y");
// } else if (y > x) {
//     alert("Y plus grand !");
// } else {
//     alert("Ils sont égaux");
// }

if (x) {
    console.log("x existe");
}