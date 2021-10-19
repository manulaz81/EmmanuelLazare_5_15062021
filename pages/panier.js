/*recapitulatif commande*/

let commande = document.getElementById("commande");
commande.innerHTML = "Voici votre commande" + "\n " ;

let produitDansLocalStorage = JSON.parse(localStorage.getItem("produitphoto"));
 console.log(produitDansLocalStorage);




//affichage des produits du panier--------
// selection de la class où je vais injecter le code html

const positionElement = document.getElementById("gridPanier");
console.log(positionElement);

// si le panier est vide : afficher le panier vide

if(produitDansLocalStorage === null){
    const panierVide = `
    <div class="lepaniervide">
        <div>Le panier est vide</div>
    </div>
    `
positionElement.innerHTML = panierVide;

}
else {
    // si le panier n'est pas vide : afficher les produits dans le locakStorage
    let structureProduitPanier =[];
    for (k = 0; k < produitDansLocalStorage.length; k++){
        structureProduitPanier = 
        structureProduitPanier + `
        
        
       <div class ="containerecap">
       <img class="photopanier" src="${produitDansLocalStorage[k].photoPanier}">
       <div class="nomPanier" >Camera ${produitDansLocalStorage[k].nom} </div>       
       <div class="optionPanier">option ${produitDansLocalStorage[k].option}</div>
       <div class ="prixPanier">Prix ${produitDansLocalStorage[k].prix/100 + " " + "€"}</div>
       <div>
            <button>-</button>
            <button class="quantitePanier">${produitDansLocalStorage[k].quantite}</button>
            <button>+</button>   
       </div>    
       <div class="prixTotalPanier"> prix total ${produitDansLocalStorage[k]. prixTotal/100 + " "+ "€"}</div>
       <button class="supprimerArticlePanier">supprimer article</button> 
       </div>         
       
       
        `    
    }
    if (k == produitDansLocalStorage.length){
        //injection html dsans la page panier
        positionElement.innerHTML = structureProduitPanier;
    }


}











/*panier*/
let blocphotocamera = document.getElementById("blocphotocamera");

const validation = document.getElementById('bouton_envoi');
const prenom = document.getElementById('prenom');
const prenom_m = document.getElementById('prenom_manquant');
//regex pour la ligne prénom
var prenom_v = /^[a-zA-ZéèîïEÈÎÏ][a-zéèàçîï]+([-'\s][a-zA-ZéèîïEÈÎÏ][a-zéèàçîï]+)?/;

validation.addEventListener('click', f_valid);

function f_valid(e){
    if(prenom.validity.valueMissing){
        e.preventDefault();
        prenom_m.textContent = 'Prenom manquant';
        prenom_m.style.color = 'red';
    } else if(prenom_v.test(prenom.value)==false){
        event.preventDefault();
        prenom_m.textContent = 'Format incorrect';
        prenom_m.style.color = 'orange';
    }else{
        
    }


}



