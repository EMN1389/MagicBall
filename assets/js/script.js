/*Ceci est la feuille de script de la Boite à réponse d'Emilie*/

// Attente du DOM (Data Object Model)
window.onload = function() {
    // querySlector() sélectionne le premier élément du DOM trouvé !
    let button = document.querySelector('figure');

    // Evènement au clique du bouton -> appelle la fonction "magic8ball()"
    button.addEventListener('click', magic8ball);
}

// Permet de retourner une réponse aléatoire parmis une sélection
function magic8ball (){

    let answers = ['Essaye plus tard', 'Essaye encore', 'Pas d\'avis', 'C\'est ton destin',
    'Le sort en est jeté', 'Une chance sur deux', 'Réflechis autrement', 'D\'après moi oui',
    'C\'est certain', 'Oui absolument', 'Tu peux compter dessus', 'Sans aucun doute',
    'Très probable', 'Oui', 'C\'est bien parti', 'C\'est non', 'Peu probable', 'Faut pas rêver',
    'N\'y compte pas', 'Impossible', 'Au fond, tu connais la réponse'
    ];

    let random = Math.floor(Math.random()* answers.length);
    let element = document.querySelector('#reponse'); 

    element.innerText = answers[random];

}