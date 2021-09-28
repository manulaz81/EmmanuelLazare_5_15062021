
//cibler la section product
let containerProduct = document.getElementById("containerProduct");
let option = document.getElementById("option");
let buttonplus = document.getElementById("buttonplus");
let buttonmoins = document.getElementById("buttonmoins");
let inputquantite = document.querySelector("input");

console.log("inputquantite");


// récupération de la chaine de requete dans l'url
// search : la partie de l'url qui suit le symbol "?" avec ce symbol inclus 
const urlid = window.location.search;
console.log(urlid);

//Methode 1 pour extraire juste l'id
const id = urlid.slice(11);
console.log(id);

fetch('http://localhost:3000/api/cameras/'+ id )
.then((res) => res.json())
.then((data) => {
    console.log(data)    
    
    {
        // container de chaque camera
         let containercarte = document.createElement("div");
         containercarte.style.border = "solid 6px black";
         containercarte.style.borderRadius = "20px";
         containercarte.style.boxShadow = "3px 3px 3px 3px";
         containercarte.style.height = "460px"; 
         containercarte.style.width = "25%";             
         containercarte.style.margin = "auto";
         containercarte.style.marginTop = "20px";
         containercarte.style.textDecoration = "none";
         containercarte.style.marginBottom = "20px";
         containercarte.style.textAlign = "center";
         containerProduct.appendChild(containercarte);   
    
         // recuperation de l'image
        let imageCam = document.createElement("img");   
        imageCam.classList.add ("photo");
        imageCam.src = data.imageUrl;  
        imageCam.style.width = "100%";
        imageCam.style.height = "120px";
        imageCam.style.marginBottom = "10px";
        imageCam.style.borderRadius = "15px 15px 0 0";
        containercarte.appendChild(imageCam);        
        console.log(imageCam.src);
       
        //recuperation du nom de caméra
        let nomCam = document.createElement("div");
        nomCam.id = "nomCamera";
        nomCam.innerHTML = "Marque : " + " " +  data.name;
        nomCam.style.marginBottom = "10px";
        nomCam.style.fontSize = "1.1rem";
        nomCam.style.fontWeight = "600";
        containercarte.appendChild(nomCam);
        console.log(containerCam);           
        console.log(nomCam);        
                
        // récuperation  de la description de la camera
        let descripCam = document.createElement("div");
        descripCam.innerHTML="Description : " + " " +  data.description;
        descripCam.style.color = "black";        
        containercarte.appendChild(descripCam);
        console.log(descripCam);
        
        // récuperation des types de lentilles de la camera
        
        let lenseCam5 = document.createElement("select");   
        lenseCam5.id = "choixSelection" ;    
        lenseCam5.style.width = "130px" ;
        lenseCam5.style.height = "30px";
        containercarte.appendChild(lenseCam5);
        console.log(lenseCam5);
        
        // ajouter le titre "selectionner votre option"
        let selectchoix = document.createElement("option");
        selectchoix.innerHTML = "choisir options";
        lenseCam5.appendChild(selectchoix);     
                        
        for(let i in data.lenses){   
            let lenseCam = document.createElement("option");            
            lenseCam.innerHTML = data.lenses[i];
            lenseCam5.appendChild(lenseCam);
            lenseCam.id = "optionSelectionnee";
            console.log(lenseCam);
        };        
              
        // ecouter le bouton option lentilles
        
        
        // essai pour changer le nom de la camera

        let testnom = document.getElementById('choixSelection');

        // testnom.addEventListener ('click', changeTexte);
        // function changeTexte(){
        //    alert( 'coco');
        // }      
        
        // récuperation du prix de la camera
        let priceCam2 = document.createElement("div");
        priceCam2.innerHTML="Prix : " + " " +  data.price/100 + " " +"€";
        priceCam2.style.fontWeight = "600";
        priceCam2.style.marginTop = " 15px";
        containercarte.appendChild(priceCam2); 
        console.log(priceCam2);   

        // récuperation du prix de la camera
        let quantiteSelect = document.createElement("div");
        quantiteSelect.innerHTML="quantité commandée :";
        quantiteSelect.style.fontWeight = "600";
        quantiteSelect.style.marginTop = " 15px";
        containercarte.appendChild(quantiteSelect); 
        console.log(priceCam2);   
       
        
        // création de l'espace "nombre de camera
        let quantiteCam = document.createElement ("input");        
        quantiteCam.id = "quantiteChoisie";
        quantiteCam.classList.add("quantite");
        quantiteCam.setAttribute("type","number"); 
        quantiteCam.step = "1";
        quantiteCam.value = 1 ;
        quantiteCam.min = 1;
        quantiteCam.max = 100 ; 
        quantiteCam.style.margin = "10px";
        quantiteCam.style.textAlign = "center";
        containercarte.appendChild(quantiteCam);     
      
       
        /* alerte pour la commande    
        function alerte(){
            alert("vous devez choisir une option pour valider votre commande!");
        }
        */

        // création du bouton "valider commande"
        let bouton = document.createElement("button");
        bouton.classList.add("boutonenv");
        bouton.style.margin = "20px";
        bouton.type = "submit";
        bouton.name = "btnenvoye";
        bouton.innerHTML = "Ajouter au panier";
        containercarte.appendChild(bouton);

        // pour ajouter au panier
         
         bouton.addEventListener('click',changeTexte);
         function changeTexte(){
             if (testnom.value==="choisir options")
             alert ("vous devez obligatoirement choisir une option");
             else 
             alert("vous avez ajouter" + "\n " + " " + quantiteCam.value + " " + " caméras" + " "+ data.name  + 
         "\npour un montant total de"+ " "+ data.price/100* quantiteCam.value + " " +"€" +
         "\navec l'option"+ " "+ testnom.value);
         let validation = document.createElement('div');
         containerProduct.appendChild(validation);
         validation.innerHTML = "vous avez ajouter" + "\n " + " " + quantiteCam.value + " " + " caméras" + " "+ data.name  + 
     "\npour un montant total de"+ " "+ data.price * quantiteCam.value/100 +
     "\navec l'option"+ " "+ testnom.value;
     
    }



    let produitSelect = {
        noms : data.name ,
        option : testnom.value,
        quantite : 3 ,
        prix : data.price ,
        prixTotal : data.price * 2 ,
    }
            console.log(produitSelect);

            //Le localStorage
            // stocker la recuperation des valeurs du formulaire dans le local storage 
            
            // déclaration de la variable "produitEnregisterDanslelocalStorage"
            
            let produitDansLocalStorage = JSON.parse(localStorage.getItem("produitSelect"));
            
            // Json.parse c'est por convertir les donnée au format json qui sont dans le local storage en objet javascript
            console.log(produitDansLocalStorage);
            
            // // // s il y a deja des produits d'enregistré dans le local storage
            if (produitDansLocalStorage){
            
            }
            // // // s il n'y a pas de produit enregistré dans le local storage
            
            else {
                produitDansLocalStorage = [];
                produitDansLocalStorage.push(produitSelect);
                console.log(produitDansLocalStorage);
            }
            
            
            
            
            
            
            
         
        
        
       //--------------- la gestion du panier--------------

       //la récuperation des données sélectionnée par l'utilisateur et envoi du panier

       // selection de l'id du formulaire

       const idForm =  document.getElementsByClassName("nomCam");
       console.log(idForm);

       // mettre le choix de l'utilisateur dans une variable

       const choixForm = idForm.value;
       console.log(choixForm);

       // selection du bouton ajouter l'article au panier

       const btnenvoyepanier = document.getElementsByClassName("boutonenv");
       console.log(btnenvoyepanier);

       // ecouter le bouton option
       //     let optionecoute = data.lenses.value.addEventListener;
       //    console.log(optionecoute);
       
       // ecouter le bouton et envoyer le panier
       
       // btnenvoyepanier.addEventListener("click", (event)=>{
           //     event.preventDefault();
           // });

           // récuperation des valeurs du formulaire
           let optionsProduits = {
               noms : data.name ,
           option : data.select,
           quantite : 3 ,
           prix : data.price ,
           prixTotal : data.price * 2 ,
       }    
       console.log(optionsProduits);

       

     
       

// selection de l'id du formulaire
        // const idForm = document.querySelector("#option");
        // console.log(idForm);


        // localStorage.setItem('mon chat','d');

        // let optionchoisieclick = data.lense.addEventListener(click,selectchoix);

        // let optionvaleur = {
        //     nomProduit : data.name,
        //     optionchoisie : data.lenses,
        //     quantite : quantiteCam.value,
        //     totalprix : data.price ,
        // }

        // console.log(optionvaleur);

        // //le local storage
        // //stocker la  récuperation des valeurs du formulaire dans le local storage

        // // déclaration de la variable "pdtlocalstor"

        // let pdtlocalstor = JSON.parse(localStorage.getItem("produit"));
        // // json.parse pour convertir les données au format json qui sont dans le local storage en objet javasript
        // console.log(pdtlocalstor);




        // // bouton.addEventListener ('click',function(){
        // //     let nomStorage = localStorage.getItem("validation");
        // //     {   
        // //         //si l'option n'est pas choisi
        // //       if ([i] = "options"); 

        // //         // alors un message d'alerte :
        // //        else alerte();

        // //        return {


        // //        }
               
        // //     }
        // // } )
        // containercarte.appendChild(bouton);    

        
        // la recupération des données selectionnées par l'utilisateur et envoie au panier
             }        
     
});




