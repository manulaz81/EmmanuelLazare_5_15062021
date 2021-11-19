//cibler la section product
let containerProduct = document.getElementById("containerProduct");
let option = document.getElementById("option");
let nomDeLaCam = document.getElementById("nomDeLaCamera");
let descript = document.getElementById("descript");
let prix = document.getElementById("prix");
let commandecam = document.getElementById("commandecam");

// récupération de la chaine de requete dans l'url
// search : la partie de l'url qui suit le symbol "?" avec ce symbol inclus 
const urlid = window.location.search;

//Methode 1 pour extraire juste l'id
const id = urlid.slice(11);
console.log(id);

fetch('http://localhost:3000/api/cameras/'+ id )
.then((res) => res.json())
.then((data) => {
  {    
    // recuperation de l'image
    let imageCam = document.createElement("img");   
    imageCam.id= "photoPro";
    imageCam.src = data.imageUrl;  
    imageCam.style.height = "290px";
    imageCam.style.margin = "10px";        
    let photoProduct1 = document.getElementById("photosProduct");
    photoProduct1.appendChild(imageCam);        

    //recuperation du nom de caméra
    let nomCam = document.createElement("div");
    nomCam.id = "nomCamera";
    nomCam.innerHTML = "Caméra " + " " +  data.name;
    nomCam.style.marginBottom = "10px";
    nomCam.style.fontSize = "1.1rem";
    nomCam.style.fontWeight = "600";
    nomDeLaCam.appendChild(nomCam);    
                
    // récuperation  de la description de la camera
    let descripCam = document.createElement("div");
    descripCam.innerHTML="Description : " + " " +  data.description;
    descripCam.style.color = "black";   
    descripCam.style.marginBottom = "10px";     
    descript.appendChild(descripCam);
          
    // récuperation des types de lentilles de la camera        
    let lenseCam5 = document.createElement("select");   
    lenseCam5.id = "choixSelection" ;    
    lenseCam5.style.backgroundColor = "grey";
    option.appendChild(lenseCam5);
               
    // ajouter le titre "selectionner votre option"
    let selectchoix = document.createElement("option");
    selectchoix.innerHTML = "choisir options";
    lenseCam5.appendChild(selectchoix);     
                    
    for(let i in data.lenses){   
        let lenseCam = document.createElement("option");            
        lenseCam.innerHTML = data.lenses[i];
        lenseCam5.appendChild(lenseCam);
        lenseCam.id = "optionSelectionnee";
    };                
        
    // essai pour changer le nom de la camera
    let testnom = document.getElementById('choixSelection');

    // récuperation du prix de la camera
    let priceCam2 = document.createElement("div");
    priceCam2.innerHTML="Prix : " + " " +  data.price/100 + " " +"€"+ " " +"TTC";
    priceCam2.style.fontWeight = "600";
    priceCam2.style.color = "red";
    priceCam2.style.marginTop = " 15px";
    prix.appendChild(priceCam2);   

    // récuperation du prix de la camera
    let quantiteSelect = document.createElement("div");
    quantiteSelect.innerHTML="Quantité commandée :";
    quantiteSelect.style.fontWeight = "600";
    quantiteSelect.style.marginTop = " 15px";
    prix.appendChild(quantiteSelect); 
        
    // création de l'espace "nombre de camera
    let quantiteComm = document.getElementById("quantiteCommandee");
    let quantiteCam = document.createElement ("input");   
    quantiteCam.style.textAlign = "center";
    quantiteCam.type= "number";       
    quantiteCam.step = "1";
    quantiteCam.style.width = "90px" ;
    quantiteCam.value = 1 ;
    quantiteCam.min = 1;
    quantiteCam.max = 10 ;
    quantiteCam.style.margin = "15px";
    quantiteCam.style.textAlign = "center";
    quantiteComm.appendChild(quantiteCam);           
       
    // création du bouton "valider commande"
    let bouton = document.createElement("button");
    let validation = document.getElementById("validation");
    bouton.classList.add("boutonenv");
    bouton.style.marginBottom = "20px";
    bouton.style.backgroundColor = "#0365";
    bouton.type = "submit";
    bouton.name = "btnenvoye";
    bouton.innerHTML = "Ajouter au panier";
    validation.appendChild(bouton);

    // pour ajouter au panier         
    bouton.addEventListener('click',changeTexte);
    function changeTexte(){             
        if (testnom.value==="choisir options")
        alert ("vous devez obligatoirement choisir une option");       
        else if (quantiteCam.value<1)
        alert ("saisie impossible car votre quantité est négative ou nulle")
        else{                 
         
            // création d'une variable qui contient les valeurs du produit selectionné
              let produitSelect = {
              id : id ,
              photoPanier : data.imageUrl,
              nom : data.name ,
              option : testnom.value,
              quantite : quantiteCam.value,
              prix : data.price/100 ,
              prixTotal : data.price *quantiteCam.value/100 ,
              };
     
        //-------------------Le localStorage---------------//
        // stocker la recuperation des valeurs du formulaire dans le local storage 
        // déclaration de la variable "produitEnregisterDanslelocalStorage"
                
          let produitDansLocalStorage = JSON.parse(localStorage.getItem("produitphoto"));
          console.log(produitDansLocalStorage);
                              
        // Json.parse c'est pour convertir les donnée au format json qui sont dans le local storage en objet javascript
        
        // création d'une variable qui permet de dire que l'objet a été ajouté
          const popupConfirmation = ()=>{
          if(alert("la caméra"+" "+ (data.name) + " "+ 'a bien été ajouté dans votre panier')){
              ;
          }
          else{
              window.location.href = "index.html";
          }

          
          }
        // // // s il y a deja des produits d'enregistré dans le local storage
          if(produitDansLocalStorage){
              produitDansLocalStorage.push(produitSelect);
              localStorage.setItem("produitphoto", JSON.stringify(produitDansLocalStorage));
              console.log(produitDansLocalStorage);
              popupConfirmation();
          }

          //function essai pour même valeur
          // function memevaleur(){ if {produitDansLocalStorage.id===id et produitDansLocalStorage.option === option.value} alors tu m'ajoute uniquement l {localStorage.setItem("produitphoto", JSON.stringify(produitDansLocalStorage)")}}

          //

          
        // s il n'y a pas de produit enregistré dans le local storage
                
                else {
                    produitDansLocalStorage = [];
                    produitDansLocalStorage.push(produitSelect);
                  // création de la clé produit
                  localStorage.setItem("produitphoto", JSON.stringify(produitDansLocalStorage));
                  popupConfirmation()                    
                  console.log(produitDansLocalStorage);
                };               
              } 
            } 
          }             
})

.catch(error => console.log ( error))

