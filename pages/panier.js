/*recapitulatif commande*/

let commande = document.getElementById("commande");
commande.innerHTML = "vous avez ajouter" + "\n " ;









/*panier*/
let blocphotocamera = document.getElementById("blocphotocamera");

const validation = document.getElementById('bouton_envoi');
const prenom = document.getElementById('prenom');
const prenom_m = document.getElementById('prenom_manquant');
//regex pour la ligne prénom
var prenom_v = /^[a-zA-ZéèîïEÈÎÏ][a-zéèàçîï]+([-'\s][a-zA-ZéèîïEÈÎÏ][a-zéèàçîï]+)?/;

validation.addEventListener('click', f_valid);

function f_valid(e){
    if(prenom.validity.valueMissing){
        e.preventDefault();
        prenom_m.textContent = 'Prenom manquant';
        prenom_m.style.color = 'red';
    } else if(prenom_v.test(prenom.value)==false){
        event.preventDefault();
        prenom_m.textContent = 'Format incorrect';
        prenom_m.style.color = 'orange';
    }else{
        
    }


}



