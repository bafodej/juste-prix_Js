const nomObjet = ['chaise gaming',"costume d'halloween",'barbecue','guitare','sac a main'];
const imageObjet = ['chaise.png','costume-haloween.png','grill.png','guitare.png','sac-a-main.png'];

var image = document.getElementById('objet');
var nomImage = document.getElementById('nom-objet');
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

let affichageTentative = document.getElementById('nbre-tentative');
var prixMystere = genererUnChiffre(100) + 1;
var nbreAleatoire = genererUnChiffre(5);

function genererUnChiffre(valeurMax) {
    return Math.floor(Math.random()* Math.floor(valeurMax));
}




function afficherImage(valeur){
    return '<img src="asset/img/'+ valeur + ' " class="img-fluid" width="30%" alt="Responsive image">';
}

image.innerHTML = afficherImage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire];
compteurTentative =10 ;
affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives ...";

function verifierProposition (){
    prixPropose = document.getElementById('prix-propose').value;
    if(compteurTentative == 0){
        affichageTentative.innerHTML ="Il vous reste" + compteurTentative + "tentatives...";
        message.innerHTML ="Désolé, vous avez perdu ! <br> Le juste prix était de "+ prixMystere + "euros";
        bouton.disbled = true;
    }else{
        if (prixPropose > prixMystere){
            message.innerHTML = "c'est moins !";
            compteurTentative = compteurTentative - 1;
            affichageTentative.innerHTML = "Il vous reste " + compteurTentative + "tentatives ...";
        }
        if (prixPropose < prixMystere){
            message.innerHTML = "c'est plus !";
            compteurTentative = compteurTentative - 1;
            affichageTentative.innerHTML = "Il vous reste " + compteurTentative + "tentatives ...";
        }
        if (prixPropose == prixMystere){
            message.innerHTML = "Bravo vous avez gagné ! en " +compteurTentative + "tentatives...";
            bouton.disbled = true;
        }
        }
    }

bouton.addEventListener('click', verifierProposition, true);


