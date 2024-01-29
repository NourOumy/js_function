// ancienne syntaxe qui fonctionne toujours :
// function nom(argument) {
//     n'importe quoi peut se passer ici 
// }

// exemple :

function addition() {
    console.log(4+5);
}

// pour la voir dans la console :

// addition()

// ou on l'utlise dans un event ou autre

// pour mettre à disposition la valeur :

// function addition() {
//     return 4+5
    // ATTENTION, LA FONCTION EST COUPEE A PARTIR DU RETURN. RIEN NE VA FONCTIONNER. LE RETURN COUPE LA FONCTION
// }

// addition() => rien ne s'affiche ici si on ne faitt pas de console.log

// Arguments de la fonction :

// ici, on laisse le choix à l'utilisateur de mettre ce qu'il veut à la place de nbr1 et nbr2

// function addition(nbr1, nbr2) {
//     return nbr1+nbr2
// }

// à partir d'ici on peut utiliser la fonction addition dans un event et mettre les valeurs qu'on veut aux arguments

// exercice 1 : salutation personnalisée 

let addname = document.querySelector (".nom")
let coucou = document.querySelector(".coucou")
let button = document.querySelector("button")

function salutations(prenom){
    if(addname.value != ""){
    // console.log(`Coucou ${prenom} !`)
    coucou.innerHTML = `Coucou ${prenom} !`
    addname.value = ""
    }
}

button.addEventListener("click", function(){
    salutations(addname.value)
})
