const nom =document.querySelector('#lastname');
const prenom =document.querySelector('#firstname');
const ville = document.querySelector('#city');
let bouton = document.querySelector('#RAZ');

bouton.addEventListener("click", HandleRemoveValue);

function HandleRemoveValue(){
    nom.value = "";
    prenom.value = "";
    ville.value = "";
    
};