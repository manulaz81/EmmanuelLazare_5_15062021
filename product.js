

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
        descripCam.style.color = "white";        
        containercarte.appendChild(descripCam);
        console.log(descripCam);

        // récuperation des types de lentilles de la camera
        
        let lenseCam5 = document.createElement("select");       
        lenseCam5.style.width = "130px" ;
        lenseCam5.style.height = "30px";
        containercarte.appendChild(lenseCam5);
        console.log(lenseCam5);

        // ajouter le titre "selectionner votre option"
        let selectchoix = document.createElement("option");
        selectchoix.innerHTML = "options";
        lenseCam5.appendChild(selectchoix);        
        
        for(let i in data.lenses){   
            let lenseCam = document.createElement("option");
            lenseCam.innerHTML = data.lenses[i];
            lenseCam5.appendChild(lenseCam);
            console.log(lenseCam);
        };        
        
        // récuperation du prix de la camera
        let priceCam2 = document.createElement("div");
        priceCam2.innerHTML="Prix : " + " " +  data.price + " " +"€";
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
        quantiteCam.classList.add("quantite");
        quantiteCam.setAttribute("type","number");
        // quantiteCam.setAttribute("placeholder","1"); 
        quantiteCam.value = 1 ;
        quantiteCam.step = "1";
        quantiteCam.max = 100 ;
        quantiteCam.min = 1;
        quantiteCam.style.margin = "10px";
        quantiteCam.style.textAlign = "center";
        containercarte.appendChild(quantiteCam);
        
        // création du bouton moins
        let buttonmoins = document.createElement("button");
        buttonmoins.classList.add("boutonmoins");
        buttonmoins.innerHTML = "-";
        buttonmoins.addEventListener("click", function() {
            quantiteCam.value --});  
        
     
        containercarte.appendChild(buttonmoins);
        
        // création du bouton plus
        let buttonplus = document.createElement("button");
        buttonplus.classList.add("boutonplus");
        buttonplus.innerHTML = "+";
        buttonplus.addEventListener("click",function() {
            quantiteCam.value ++});
        containercarte.appendChild(buttonplus);
        
        // création du bouton "valider commande"
        let bouton = document.createElement("button");
        bouton.classList.add("bouton");
        bouton.style.margin = "20px";
        bouton.type = "submit";
        bouton.innerHTML = "Ajouter au panier";
        bouton.addEventListener ('click',function(){
            let nomStorage = localStorage.getItem("validation");
            {
                if (lenseCam === [i])
                bouton.innerHTML = " erreur ";
            }
        } )
        containercarte.appendChild(bouton);    


        // la recupération des données selectionnées par l'utilisateur et envoie au panier
         
            

        
        

    }        
     
});




