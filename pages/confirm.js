let confirmCommande = document.getElementById("commandeValidé");


let commandeClient = JSON.parse(localStorage.getItem("confirmation"));
let infoClient = JSON.parse(localStorage.getItem("InfoClient"));

console.log(commandeClient.prixTotal);


confirmCommande.innerHTML = "Mr"+ " "+ infoClient.nom + ", votre commande a été validé, elle porte le numéro"+" " + commandeClient[8] +" "+ "veuillez noter ce numéro, il vous sera demandé. Le montant de votre commande est de" + " "+ commandeClient.prixTotal + " " +  "TTC. Merci de votre confiance, et à bientôt sur Orinico.fr !"

