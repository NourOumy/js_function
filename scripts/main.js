// ancienne syntaxe qui fonctionne toujours :
// function nom(argument) {
//     n'importe quoi peut se passer ici 
// }

// exemple :

// function addition() {
//     console.log(4+5);
// }

// pour la voir dans la console :

// addition()

// ou on l'utlise dans un event ou autre

// pour mettre à disposition la valeur :

// function addition() {
//     return 4+5
    // ATTENTION, LA FONCTION EST COUPEE A PARTIR DU RETURN. RIEN NE VA FONCTIONNER. LE RETURN COUPE LA FONCTION
// }

// addition() => rien ne s'affiche ici si on ne faitt pas de console.log

// Arguments de la fonction (dès qu'on a identifié ce qui va varier d'un utilisateur à l'autre = argument):

// ici, on laisse le choix à l'utilisateur de mettre ce qu'il veut à la place de nbr1 et nbr2

// function addition(nbr1, nbr2) {
//     return nbr1+nbr2
// }

// à partir d'ici on peut utiliser la fonction addition dans un event et mettre les valeurs qu'on veut aux arguments

// exercice 1 : salutation personnalisée 

let addname = document.querySelector (".nom")
let coucou = document.querySelector(".coucou")
let button = document.querySelector("button")
let result = document.querySelector(".result")

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


// 2.Comparer deux nombres et afficher si le premier est plus grand que le second (ou s'il est égal), les nombres doivent être envoyés par 2 champs input de type nombre et la fonction doit se lancer au click sur un bouton de validation

let compare = document.querySelector(".compare")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let result2 = document.querySelector(".result2")

function comparaison(nbr1, nbr2){
    if(nbr1>nbr2){
       result2.innerHTML = `${nbr1} est supérieur à ${nbr2}`
    } else if(nbr1<nbr2){
       result2.innerHTML = `${nbr1} est inférieur à ${nbr2}`
    } else {
       result2.innerHTML = `${nbr1} est égal à ${nbr2}`
    }
nbr1.value == ""
nbr2.value == ""
    }
    
compare.addEventListener("click", function(){
    comparaison(parseInt(input1.value),parseInt(input2.value))
    
})

// 3. Demandez à l'utilisateur son poids (en kg) et sa taille (en m) et calculez son IMC
// POUR FAIRE UN IF AVEC DEUX CONDITION => si if(prenom = nour && nom = ryahi)
let calculerImc = document.querySelector(".calculerImc")
let kg = document.querySelector(".poids")
let metre = document.querySelector(".taille")
let resultImc = document.querySelector(".resultImc")
let resultatImc = 0

// pour arrondir : tofixed(combien de chiffre après la virgule)
function imc(poids,taille){
    resultatImc= poids/(taille**2).toFixed(1)
    if(resultatImc<18,5){
        resultImc.innerHTML = `Votre IMC est de ${resultatImc} ce qui signifie que vous êtes en insuffisance pondérale (maigreur)`
    }
    if(resultatImc<25){
        resultImc.innerHTML = `Votre IMC est de ${resultatImc} ce qui signifie que vous êtes de corpulence normale`
    }
    if(resultatImc<30){
        resultImc.innerHTML = `Votre IMC est de ${resultatImc} ce qui signifie que vous êtes en surpoids`
    }
    if(resultatImc<35){
        resultImc.innerHTML = `Votre IMC est de ${resultatImc} ce qui signifie que vous êtes en obésité modérée`
    }
    if(resultatImc<40){
        resultImc.innerHTML = `Votre IMC est de ${resultatImc} ce qui signifie que vous êtes en obésité sévère`
    }
    if(resultatImc>40){
        resultImc.innerHTML = `Votre IMC est de ${resultatImc} ce qui signifie que vous êtes en obésité morbide`
    }

}

// parseFloat = pour prendre en comptte ce qu'il y a après la virgule

calculerImc.addEventListener("click", function(){
    imc(parseFloat(kg.value), parseFloat(metre.value))
    
})


// exercice 4

let findnbr = document.querySelector('.findnbr')
let submitnbr = document.querySelector('.submitnbr')
let resultatnbr = document.querySelector('.resultatnbr')
let compteur = document.querySelector('.compteur')
let decompte = 5


// pour utiliser le setTimeout :
function effacer(){
    resultatnbr.innerHTML=""
}

// Math.floor arrondit 5.95 => 5
// Math.round arrondit 5.95 => 6
function tirage (min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
let justnbr = tirage (0,100)


function comparaisonnbr (finded,tiragenbr){
    if(finded!=tiragenbr){
        resultatnbr.innerHTML="oups, Essayez encore !"

        setTimeout(effacer, 2000)
        // = pour effacer près 2s
    }else{
        resultatnbr.innerHTML="Yes ! you are the winner !"
        setTimeout(effacer, 2000)

    }
    if(decompte==0){
        resultatnbr.innerHTML="Vous avez épuisé toutes vos chances :-("
        findnbr.parentElement.remove()
    }
}

submitnbr.addEventListener("click", function(){
    decompte --
    comparaisonnbr(findnbr.value,justnbr)
    
    compteur.innerHTML = decompte
    // compteur.innerHTML = decompte -1
    // compteur = decompte
})

// exercice 5

let fetards = document.querySelector('.fetards'),
    quantity = document.querySelector('.quantity'),
    ingredients = document.querySelector('.ingredients'),
    miamersbtn = document.querySelector('.miamersbtn'),
    miamerstab =[],
    recap = document.querySelector('.recap')

    function addmiamerstab (name,nbritems,items){
        miamerstab[0]= name;
        miamerstab[1]= nbritems;
        miamerstab[2]= items
        recap.innerHTML += `
        <div><p>[${miamerstab[0]}] ${miamerstab[1]}x ${miamerstab[2]}<span class="delete" href="#">❌</span></p></div>
        `
    }

    miamersbtn.addEventListener("click", function(){
        addmiamerstab(fetards.value,quantity.value,ingredients.value)
        let allspans = document.querySelectorAll('span')
        allspans.forEach(function(allspan){
            allspan.addEventListener("click", function(){
                allspan.parentElement.remove()

            })
        })
    })
   

    
