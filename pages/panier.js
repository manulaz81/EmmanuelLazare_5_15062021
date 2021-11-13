let positionElement = document.getElementById("commande");
let containerRecapEtTotal = document.getElementById("containerRecapEtTotal");

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
              window.location.href = "/pages/panier.html"  ;              
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
        const prixTotalpannier = recupValeur.reduce(reducer,1);   
        
        let ligneProduit2 = document.createElement("div");
        ligneProduit2.id = "Articlebis2";
        ligneProduit.appendChild(ligneProduit2);
        ligneProduit2.innerHTML =  prixTotalpannier + " "+ "€";

        let totalProd2 = document.createElement("div");
        totalProd2.id = "totalProd2";
        totalProd.appendChild(totalProd2);
        totalProd2.innerHTML =  prixTotalpannier + prixLivraison  + " "+ " €" ;
    }
          
// local storage
 
//**************************fin article du panier*****************************/

//**************************gestion du formulaire*****************************/
const formulaireContainer =  document.querySelector("formulaire");
const validation = document.getElementById('bouton_envoi');
const nom = document.getElementById('nom');
const nom_m = document.getElementById('nomManquant');
const prenom =  document.getElementById("prenom");
const prenom_m = document.getElementById('prenomManquant');
const adresse = document.getElementById("adresse");
const adresse_m = document.getElementById('adresseManquant');
const ville = document.getElementById("ville");
const ville_m = document.getElementById('villeManquant');
const telephone = document.getElementById("phone");
const telephone_m = document.getElementById('phoneManquant');
const email = document.getElementById("email");
const email_m = document.getElementById('mailManquant');

//regex pour la ligne prénom
var nom_v = /^[a-zA-ZéèîïEÈÎÏ][a-zéèàçîï]+([-'\s][a-zA-ZéèîïEÈÎÏ][a-zéèàçîï]+)?/;

// regex pour ma ligne telephone
// var tel_r = [0-9]{10}/ ;
// console.log(tel_r);

validation.addEventListener('click', f_valid);

function f_valid(e){
    if(nom.validity.valueMissing){
        e.preventDefault();
        nom_m.textContent = 'Merci de compléter ce champs';
        nom_m.style.color = 'red';
    }
    location.reload
    if(prenom.validity.valueMissing){
        e.preventDefault();
        prenom_m.textContent = 'Merci de compléter ce champs';
        prenom_m.style.color = 'red';
    }
    if(adresse.validity.valueMissing){
        e.preventDefault();
        adresse_m.textContent = 'Merci de compléter ce champs';
        adresse_m.style.color = 'red';
    }
    if(ville.validity.valueMissing){
        e.preventDefault();
        ville_m.textContent = 'Merci de compléter ce champs';
        ville_m.style.color = 'red';
    }
    // if(telephone.validity.valueMissing){
    //     e.preventDefault();
    //     telephone_m.textContent = 'Merci de compléter ce champs';
    //     telephone_m.style.color = 'red';
    // }
    if(email.validity.valueMissing){
        e.preventDefault();
        email_m.textContent = 'Merci de compléter ce champs';
        email_m.style.color = 'red';
    }    
    else if(nom_v.test(nom.value)==false){
        e.preventDefault();
        nom_m.textContent = 'Format incorrect';
        nom_m.style.color = 'orange';
    }
       
    else{

        let formulaire = [nom.value, prenom.value,adresse.value, ville.value,phone.value,email.value];
        let valeurTotal = document.getElementById('totalProd2');
        console.log(valeurTotal.textContent);
        console.log(formulaire[5]);


 // envoie de l'objet vers le serveur

        // let objetResultat = {
        //     contact : {
        //         firstName : newClient.formulaire[0],
        //         lastName : newClient.formulaire[1],
        //         address : newClient.formulaire[2],
        //         city : newClient.formulaire[3],
        //         email : newClient.formulaire[4],
        //     },
        //     products : productsId
        // }
        // console.log(objetResultat);


        const formulaire1 = formulaire;       
          console.log(formulaire1);
        
 fetch('http://localhost:3000/api/cameras/order', {
    method: 'POST',    
    headers : {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    },
    body : JSON.stringify(formulaire1)
})

// pour voir le résultat du serveur dans la console

 .then(function(res){
     if (res.ok){
          console.log( response.json())
        }
    })
 .then (function(){
     document
        .getElementById('donneeForm')
        .innerHTML = formulaire; 
 })      
    
 .catch (function(e){
  alert("probleme de connexion");
    })


    
    // alert("Bonjour Mr " +formulaire[0] +" " +"votre commande a bien été transmise,elle porte le n°" +" " +"294" +" "+"pour un montant de"+" "+valeurTotal.textContent +" "+ "un email vient de vous être envoyé à l'adresse suivante : " +formulaire[5] + "  ainsi qu'une confirmation pas sms."
    // );
    
    // localStorage.clear();
}
window.location = "confirm.html";

    
}

     




