
let positionElement = document.getElementById("commande");
let containerRecapEtTotal = document.getElementById("containerRecapEtTotal");
let totalPanier =[];
let ProductId = [];
let produitDansLocalStorage2 = JSON.parse(localStorage.getItem("produitphoto"));


//affichage des produits du panier

// si le panier est vide : afficher le panier vide

if(produitDansLocalStorage2 === null){
    const panierVide = `
    <div class="lepaniervide">
        <div>Votre panier est vide</div>
    </div>
    `
positionElement.innerHTML = panierVide;
let formulairevide = `Merci de retourner au menu si vous souhaitez commander !`
console.log(formulairevide);
let formulaireNonvisible = document.getElementById("form");
formulaireNonvisible.innerHTML = formulairevide ;

}

else { 
    // si le panier n'est pas vide : afficher les produits dans le locakStorage
   
    for (let k in produitDansLocalStorage2){   
        let commande2 = document.getElementById("commande");
        commande2.innerHTML = "Récapitulatif de votre commande" + "\n " ;  
        let containerRecap27 = document.getElementById("containerRecap1");

        //création du container pour les articles
       let containerRecap = document.createElement("div");
       containerRecap.classList = "containerRecapPanier";
       containerRecap.style.border = "1px solid black";
       containerRecap27.appendChild(containerRecap);
        
        //création de la div pour l'image du Panier
        let photoCameraduPanier = document.createElement("img");
        photoCameraduPanier.classList = "photoPanier";
        photoCameraduPanier.style.width = "90px";        
        photoCameraduPanier.src = produitDansLocalStorage2[k].photoPanier;
        containerRecap.appendChild(photoCameraduPanier); 
        
        // création de la div Nom de la caméra
        let nomCameraDuPanier = document.createElement("div");
        nomCameraDuPanier.classList = "nomcamerapanier";
        nomCameraDuPanier.innerHTML = "Caméra"+ " "+  produitDansLocalStorage2[k].nom;
        containerRecap.appendChild(nomCameraDuPanier);

        // création de la div Option de la camera
        let optionCamPanier = document.createElement("div");
        optionCamPanier.classList = "optionCamPanier";
        optionCamPanier.innerHTML  = "Option"+ " "+  produitDansLocalStorage2[k].option;
        containerRecap.appendChild(optionCamPanier);     
        
        //creation d'une div contenant les boutons plus , moins et quantité commandée
        let divquantite = document.createElement("div");
        divquantite.id = "quantiteBouton";
        containerRecap.appendChild(divquantite);        
        
        //création de l'input
        const inputQuantite = document.createElement("input");
        inputQuantite.classList ="inp";
        inputQuantite.type = "number";
        inputQuantite.step = "1";       
        inputQuantite.value = produitDansLocalStorage2[k].quantite  ;        
        inputQuantite.min = "1";
        inputQuantite.max = 10 ;
        inputQuantite.innerHTML=  produitDansLocalStorage2[k].quantite;
        divquantite.appendChild(inputQuantite);       
        
        // création de la div prix total payé
        const montantTotalDuPanier =  document.createElement("div"); 
        montantTotalDuPanier.classList = "montantApayer";               
        montantTotalDuPanier.innerHTML = produitDansLocalStorage2[k].prixTotal+ " "+ " €";        
        containerRecap.appendChild(montantTotalDuPanier);          
       
        // création de la div pour créer un bouton
        let boutonSupprimeDuPanier = document.createElement("button");
        boutonSupprimeDuPanier.classList = "boutonSupprimerArticle";
        boutonSupprimeDuPanier.innerHTML = "supprimer article";
        containerRecap.appendChild(boutonSupprimeDuPanier);   
        
        ProductId.push(produitDansLocalStorage2[k].id);
        
    
    }
    
    //selection de tout les "boutons supprimés"           
    let boutonSupp= document.querySelectorAll("button");
    
    // boucle pour récuperer la valeur dans le localstorage
    for (let a= 0; a<produitDansLocalStorage2.length; a++){
                let supprimeValeurLocalStorage = [produitDansLocalStorage2[a]];           
    }   

    for (let b =0 ; b <boutonSupp.length; b++){
                boutonSupp[b].addEventListener("click", (event)=>{
                    event.preventDefault();
                console.log(event);
                                
             // selection de l'id du produit qui va être supprimer en cliquant sur le bouton

             let idSelectSupprime = produitDansLocalStorage2[b].id ;
             console.log(idSelectSupprime);                
             
             // avec la methode filter je selectionn les element a garder et supprime l'élemnt où le btn suppr a été cliqué
              produitDansLocalStorage2 = produitDansLocalStorage2.filter(el =>el.id !== idSelectSupprime);
            //   console.log(produitDansLocalStorage2);
             
             // envoi la valeur dans le localstorage
              localStorage.setItem("produitphoto",JSON.stringify(produitDansLocalStorage2));            
              
              //alerter pour avertir que le produit est enlever du panier
              alert ( "Le produit a été retiré du panier !");              
              window.location.href = "panier.html";              
            })        
        }
        
        if (produitDansLocalStorage2==0){
            const panierVide = `
            <div class="lepaniervide">
            <div>Votre panier est vide</div>
            </div>
            `
            positionElement.innerHTML = panierVide;
            // panierVide.remove();
            let formulvide = document.querySelector("form");
            formulvide.innerHTML = " ";            
            containermontantTotalPanier.remove;     
        }
        
        // fonction crée pour modifié le montant total en fonction de la saisie sur input
                 const inputEcoute = document.getElementsByClassName("inp");
               for (let c = 0; c < inputEcoute.length; c++){  
               inputEcoute[c].addEventListener('change', (arrange)=> {
           
               let montantPanier2 = document.getElementsByClassName("montantApayer");        
                   montantPanier2[c].innerHTML = inputEcoute[c].value * produitDansLocalStorage2[c].prix ; 
                   
                   produitDansLocalStorage2[c].quantite = inputEcoute[c].value;
                   produitDansLocalStorage2[c].prixTotal = parseInt (montantPanier2[c].innerHTML);        
                   localStorage.setItem("produitphoto", JSON.stringify(produitDansLocalStorage2)); 
                   location.reload();                     
                   
        }) ;
        
        } 

     let containermontantTotalPanier = document.createElement("div");
     containermontantTotalPanier.id ="containerTotalPanier";    
     containerRecapEtTotal.appendChild(containermontantTotalPanier);

     let montantTotalPanier = document.createElement("div");
     montantTotalPanier.id ="TotalPanier";
     montantTotalPanier.innerHTML = "Votre panier";
     containermontantTotalPanier.appendChild(montantTotalPanier);

     let divtotal = document.createElement("div");
     divtotal.id ="divTotal";
     containermontantTotalPanier.appendChild(divtotal);

     let ligneProduit = document.createElement("div");
     ligneProduit.id = "Article";
     divtotal.appendChild(ligneProduit);

     let ligneProduit1 = document.createElement("div");
     ligneProduit1.id = "Articlebis";
     ligneProduit.appendChild(ligneProduit1);
     ligneProduit1.innerHTML = "Article " + " " ;    

     let livraison = document.createElement("div");
     livraison.id = "Article2";
     divtotal.appendChild(livraison);     

     let livraison1 = document.createElement("div");
     livraison1.id = "Article2a";
     livraison.appendChild(livraison1);
     livraison1.innerHTML = "Livraison " ;

     let prixLivraison = 10;

     let livraison2 = document.createElement("div");
     livraison2.id = "Article2b";
     livraison.appendChild(livraison2);
     livraison2.innerHTML =   prixLivraison + " "+ "€" ;

     let totalProd = document.createElement("div");
     totalProd.id = "totalProd";
     divtotal.appendChild(totalProd);     

     let totalProd1 = document.createElement("div");
     totalProd1.id = "totalProd1";
     totalProd.appendChild(totalProd1);
     totalProd1.innerHTML = "Total TTC :" + " " ;

     //déclaration de la variable pour pouvoir y mettre les prix qui sont le panier

    let recupValeur = [];        
    
    // aller chercher les prix dans le panier
    
    for (let d= 0; d<produitDansLocalStorage2.length; d++){
        
        let prixProduitDansPanier =  produitDansLocalStorage2[d].prixTotal;
        // Mettre les prix dans un tableau
        recupValeur.push(prixProduitDansPanier);        
        
    }
    // pour additionner le montant du tableau
        const reducer = (previousValue, currentValue) => previousValue + currentValue;         
        const prixTotalpannier = recupValeur.reduce(reducer,0);   
        
        let ligneProduit2 = document.createElement("div");
        ligneProduit2.id = "Articlebis2";
        ligneProduit.appendChild(ligneProduit2);
        ligneProduit2.innerHTML =  prixTotalpannier + " "+ "€";

        let totalProd2 = document.createElement("div");
        totalProd2.id = "totalProd2";
        totalProd.appendChild(totalProd2);
        totalProd2.innerHTML =  prixTotalpannier + prixLivraison  + " "+ " €" ;
        // console.log(totalProd2.textContent);        
        // local storage
    }

    totalPanier.push(parseInt(totalProd2.textContent));  
    console.log(ProductId);


//**************************fin article du panier*****************************/


const boutonsub =  document.getElementById("boutonsub");
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", send);

function send(e){
  e.preventDefault();
  
  let firstName1 = document.getElementById('firstName2');
  let lastName1 = document.getElementById('lastName2');
  let adress1 = document.getElementById('adress2');
  let city1 = document.getElementById('city2');
  let email1 = document.getElementById('email2');


class Client {
            constructor(firstName, lastName, address, city, email) {
            (this.firstName = firstName),
            (this.lastName = lastName),
            (this.address = address),
            (this.city = city),
            (this.email = email)     
            }
        }
       
let valeurFormulaire =  new Client (firstName1.value, lastName1.value, adress1.value,city1.value,email1.value);
   console.log(valeurFormulaire); 
   
let resultat = {
             contact : {
                 firstName : firstName1.value,
                 lastName :lastName1.value,
                 address : adress1.value,
                 city : city1.value,
                 email :  email1.value
             },
             products : ProductId 
   };
console.log(resultat);
   
   
fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify (resultat)
    })
    .then(response =>response.json())
    .then(response => {
      localStorage.clear();
          let objCommande = {
              idCommande : response.orderId,
              prixTotal : totalPanier
          }
      let commande = JSON.stringify(objCommande);
      localStorage.setItem('commande', commande);
      window.location = 'confirm.html';
        });
}
