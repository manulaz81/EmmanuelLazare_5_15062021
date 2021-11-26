let boutonPanier=  document.getElementById("boutonPanier");
let containerPhoto = document.getElementById("Photo");
let containerCam = document.getElementById("containerCam2");  

fetch("http://localhost:3000/api/cameras")
.then((res) => res.json())
.then((data) => {
       
        for(let i in data){           

            // container pour chaque article

            let containerProduit =  document.createElement("div");
            containerProduit.classList.add ("produitCamera");
            containerCam.appendChild(containerProduit);            
                        
            // container de chaque camera
            let containercarte = document.createElement("a","div");
            containercarte.id = "lienProduit";        
             containercarte.style.textDecoration = "none";
             containercarte.href = "product.html?id_cameras"+data[i]._id;            
             containerProduit.appendChild(containercarte);   
        
             // recuperation de l'image
             let imageCam = document.createElement("img");   
             imageCam.classList.add ("photo");
             imageCam.src = data[i].imageUrl;  
             imageCam.style.borderRadius = "15px 15px 0 0";
             containercarte.appendChild(imageCam);        
                       
            // div pour le contenu
            let div1 = document.createElement("div");
            div1.classList.add ("information");
            containerProduit.appendChild(div1); 
            
            //recuperation du nom de caméra
            let nomCam = document.createElement("div");
            nomCam.classList.add("nomCamera");
            nomCam.innerHTML = "Caméra : " + " " +  data[i].name;
            nomCam.style.marginBottom = "10px";
            nomCam.style.fontWeight = "600";
            div1.appendChild(nomCam);  
            
            //récupération de la description
            let descrip = document.createElement("div");
            descrip.classList = ("description")
            descrip.innerHTML = "Description : " + " " +  data[i].description;
            div1.appendChild(descrip);  

            // récupération du prix
            let priceCam = document.createElement("div");
            priceCam.classList.add("prixCamera");
            priceCam.innerHTML=  data[i].price/100 + " " +"€";
            priceCam.style.fontWeight = "600";
            priceCam.style.marginTop = " 15px";
            div1.appendChild(priceCam);            
            }            
        })
 .catch(error => error )  