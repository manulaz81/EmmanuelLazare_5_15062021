let confirmCommande = document.getElementById("commandeValidé");


let commandeClient = JSON.parse(localStorage.getItem("commande"));


console.log(commandeClient.idCommande);


confirmCommande.innerHTML = "Votre commande a été validée, elle porte le numéro"+" " + commandeClient.idCommande +" "+ "veuillez noter ce numéro, il vous sera demandé. Le montant de votre commande est de" + " "+ commandeClient.prixTotal + " " +  "TTC. Merci de votre confiance, et à bientôt sur Orinico.fr !"

// localStorage.clear();