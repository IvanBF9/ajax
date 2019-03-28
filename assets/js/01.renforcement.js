// -- Déclarer un tableau numérique
var prenoms = ["Hugo", "David", "Farid", "Justine", "Khalid"];

// -- Apercu dans la console
console.log(prenoms);

// -- Si je veux connaitre le nombre d'éléments (prenoms) de mon tableau ?
let nombreElementsDansMonTableau = prenoms.length;
console.log(nombreElementsDansMonTableau);

// -- Pour récupérer une Valeur dans le tableau numérique j'utilise son indice.(index)
console.log(prenoms[1]); // David
console.log(prenoms[3]); // Justine

let i = 2;
console.log(prenoms[i]); // Farid

// -- Pour i = 0 (Au départ i vaut 0) ; ant que i < (est strictement inférieur) à 
//    nombreElementsDansMonTableau (prenom.lenght) ; alors i++. (J'incrémente i de 1)
for (let i = 0; i < nombreElementsDansMonTableau; i++) {

    // -- Tous ce qui est situé à l'intérieur des accolades, sera dans la boucle.
    console.log('Ici, i = ' + i);
    console.log(prenoms[i]);
    console.log('---');

}// Fin de la boucle for

// -- Voyons maintenant comment proceder avec des objets 

const Contact = {
    //INDICE : VALEUR
    prenom: "Ivan",
    nom: "BRAGA",
    tel: "0677777777"

};
// -- Apercu dans la console
console.log(Contact);

console.log("Prénom : " + Contact.prenom);
console.log("Nom : " + Contact.nom);
console.log("Tel : " + Contact['tel']);// Autre possibilité

const Contacts = [
    "Zita",
    "Jean Luc",
    {
        prenom: "Ivan",
        nom: "BRAGA",
        age: 18
    },
    {
        prenom: "JC",
        nom: "COUGNY",
        age: 47
    },
];

// -- Apercu dans la console
console.log(Contacts);

// -- Comment acceder aux valeurs de mon objet dans mon tableau numérique.
// -- 1. D'abord, je récupére mon objet 
console.log(Contacts[2]);

// -- 2. Pour accéder aux valeurs de mon objet 
console.log("Prénom : " + Contacts[2].prenom);
console.log("Nom : " + Contacts[2].nom);
console.log("Age : " + Contacts[2].age);

// -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet 
//    situé à l'index 2 de mon tableau numérique "Contacts".

// -- Comment parcourir un tableau avec des objets.
// -- Partons du tableau suivant :

const Etudiants = [
    { prenom: "Jean", nom: "MICHEL", competence: "Fullstack" },
    { prenom: "David", nom: "GUERRA", competence: "Front" },
    { prenom: "Rachid", nom: "KAMAN", competence: "Back" },
    { prenom: "Zita", nom: "NGUYEN", competence: "Fullstack" },
    { prenom: "Thomas", nom: "CHEYLAS", competence: "Front" },
    { prenom: "Asam", nom: "AHMAD", competence: "Front" },
];

// -- Regardons dans la console 
console.log(Etudiants);

// -- Si je veux connaitre le nombre d'etudiants : 
const nombreEtudiants = Etudiants.length;
console.log("Nombre d'Etudiants = " + nombreEtudiants);

/* ------------------------------------------------------
|       ~ ~ ~ ~    💀  EXERCICE 😜     ~ ~ ~ ~          |
|                                                        |  
|                                                        |  
|  Affichez dans la page HTML à l'aide de jQuery la      | 
|  liste (ul>li) des Etudiants et leur classe.           | 
|                                                        | 
|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  */


//Mon exercice (fonctionel)   
$(document).ready(function () {
    $(document.body).append('<ul class="list-group">')
    for (i = 0; i < nombreEtudiants; i++) {
        $(document.body).append('<li class="list-group-item text-center">' + "<strong>Prénom</strong> : " + Etudiants[i].prenom + " <strong>Nom</strong> : " + Etudiants[i].nom + " <strong>Compétence</strong> : " + Etudiants[i].competence + '</li><br>')
    }
    $(document.body).append('</ul>')
});

// Correction
$(function(){
    // Ici, jQuery est pret a travailler
    console.log('jQuery est pret')

    // Création d'une balise ul
    const ul = $('<ul class="list-group">');

    for( let i = 0 ; i < nombreEtudiants ; i++){

        // -- Je récupére l'étudiant en cours dans ma boucle.
        let Etudiant = Etudiants[i];

        // Apercu dans la console
        console.log( Etudiant );

    
        $(`
            <li class="list-group-item text-center">
                <strong> ${Etudiant.prenom} ${Etudiant.nom}</strong>
                : ${Etudiant.competence}
            </li>
        `).appendTo( ul );
    }

    ul.appendTo($('body'));

});