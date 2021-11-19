let boutonPanier=  document.getElementById("boutonPanier");
let containerPhoto = document.getElementById("Photo");
let containerCam = document.getElementById("containerCam2");  

fetch("http://localhost:3000/api/cameras")


.then((res) => res.json())

.then((data) => { 
    console.log(data);    
       
        for(let i in data){           
                        
            // container de chaque camera
            let containercarte = document.createElement("a","div");
            containercarte.id = "lienProduit";        
             containercarte.style.textDecoration = "none";
             containercarte.href = "product.html?id_cameras"+data[i]._id;            
             containerCam.appendChild(containercarte);   
        
             // recuperation de l'image
             let imageCam = document.createElement("img");   
             imageCam.classList.add ("photo");
             imageCam.src = data[i].imageUrl;  
             imageCam.style.width = "100%";
             imageCam.style.marginBottom = "10px";
             imageCam.style.borderRadius = "15px 15px 0 0";
             containercarte.appendChild(imageCam);        
                       
            //recuperation du nom de caméra
            let nomCam = document.createElement("div");
            nomCam.innerHTML = "Caméra : " + " " +  data[i].name;
            nomCam.style.marginBottom = "10px";
            nomCam.style.fontSize = "1.1rem";
            nomCam.style.fontWeight = "600";
            containercarte.appendChild(nomCam);                   

            let priceCam = document.createElement("div");
            priceCam.innerHTML="Prix : " + " " +  data[i].price/100 + " " +"€";
            priceCam.style.fontWeight = "600";
            priceCam.style.marginTop = " 15px";
            containercarte.appendChild(priceCam);            
            }
            
        })
        .catch (function(e){
            alert("probleme de connexion");
            })         