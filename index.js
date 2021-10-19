
let containerCam = document.getElementById("containerCam")

console.log(containerCam)

let boutonPanier=  document.getElementById("boutonPanier")



fetch("http://localhost:3000/api/cameras")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)       
       
        for(let i in data){

            // container de chaque camera
             let containercarte = document.createElement("a","div");
             containercarte.style.border = "solid 6px black";
             containercarte.style.borderRadius = "20px";
             containercarte.style.height = "290px"; 
             containercarte.style.width = "25%";             
             containercarte.style.margin = "auto";
             containercarte.style.marginTop = "20px";
             containercarte.style.textDecoration = "none";
             containercarte.href = "product.html?id_cameras"+data[i]._id;
             containercarte.style.marginBottom = "20px";
             containercarte.style.textAlign = "center";
             containerCam.appendChild(containercarte);   
        
             // recuperation de l'image
             let imageCam = document.createElement("img");   
             imageCam.classList.add ("photo");
             imageCam.src = data[i].imageUrl;  
             imageCam.style.width = "100%";
             imageCam.style.marginBottom = "10px";
             imageCam.style.borderRadius = "15px 15px 0 0";
             containercarte.appendChild(imageCam);        
            console.log(imageCam.src);
           
            //recuperation du nom de caméra
            let nomCam = document.createElement("div");
            nomCam.innerHTML = "Marque : " + " " +  data[i].name;
            nomCam.style.marginBottom = "10px";
            nomCam.style.fontSize = "1.1rem";
            nomCam.style.fontWeight = "600";
            containercarte.appendChild(nomCam);
            console.log(containerCam)           
            console.log(nomCam);            


            let priceCam = document.createElement("div");
            priceCam.innerHTML="Prix : " + " " +  data[i].price + " " +"€";
            priceCam.style.fontWeight = "600";
            priceCam.style.marginTop = " 15px";
            containercarte.appendChild(priceCam);
           
            console.log(priceCam);
 
            }
            
        });
    
  