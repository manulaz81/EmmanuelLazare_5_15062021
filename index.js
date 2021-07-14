
let containerCam = document.getElementById("containerCam")
console.log(containerCam)


fetch("http://localhost:3000/api/cameras")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)       
       
        for(let i in data){

            // container de chaque camera
             let containercarte = document.createElement("div");
             containercarte.style.border = "solid 6px";
             containercarte.style.height = "250px"; 
             containercarte.style.width = "380px";             
             containercarte.style.margin = "6px";
             containerCam.appendChild(containercarte);
             
            
             
             // recuperation de l'image
             let imageCam = document.createElement("img");   
            //  imageCam.innerHTML = data[i].imageUrl;
             imageCam.classList.add ("photo");
             imageCam.src = data[i].imageUrl;  
             containercarte.appendChild(imageCam);           

            //  imageCam.setAttribute('src',data[i].imageUrl);
            // const imageCamaffiche = data[i].imageUrl;
            // imageCam.insertAdjacentElement("afterbegin", imageCamaffiche);
                  
            //  imageCam.style.img = "60px";
            
            // imageCam.setAttribute ('src',data[i].imageUrl);
            // imageCam.style.fontWeight = "bold";
            

            console.log(imageCam.src);
           
            //recuperation du nom de caméra
            let nomCam = document.createElement("div");
            nomCam.innerHTML = "Nom : " + " " +  data[i].name;
            containercarte.appendChild(nomCam);
            console.log(containerCam)           
            console.log(nomCam);            

            // récuperation  de la description de la camera
            let descripCam = document.createElement("div");
            descripCam.innerHTML="Description : " + " " +  data[i].description;
            descripCam.style.color = "red";
            containercarte.appendChild(descripCam);
            console.log(descripCam);

            //récuperation des types de lentilles de la camera

            let lenseCam = document.createElement("div");
            lenseCam.innerHTML="Lenses : " + " " +  data[i].lenses
            containercarte.appendChild(lenseCam);
            console.log(lenseCam);

            //récuperation du prix de la camera

            let priceCam = document.createElement("div");
            priceCam.innerHTML="Prix : " + " " +  data[i].price
            containercarte.appendChild(priceCam);
           
            console.log(priceCam);
            
            }
         
    });

    


 


