$(document).ready(function () {                          /* Afficher/cacher les boutons niv 1 */
    $('#btnB2B').click(function () {
        $('#B2Cboutons').hide();

        $('#B2Bboutons').show();
        $('#zonetexte').show();
        
        $('#btnB2C').removeClass("btnSelectionne");
        $('#btnB2B').addClass("btnSelectionne");
    });

    $('#btnB2C').click(function () {
        $('#B2Bboutons').hide();

        $('#B2Cboutons').show();
        $('#zonetexte').show();
        
        $('#btnB2B').removeClass("btnSelectionne");
        $('#btnB2C').addClass("btnSelectionne");
    });
});

function ContourBleu (bouton) {                         /* gestion contours boutons selectionnes niv 2 */
    var lis = document.querySelectorAll('.B2Cchoix');   /* récupération de la liste des boutons dans un tableau */
    for (i=0; i< lis.length ; i++){                     /* parcours des éléments du tableau */
        $(lis.item(i)).removeClass("btnSelectionne");
    }
    $(bouton).addClass("btnSelectionne");                 /* application classe CSS au bouton selectionne */
}

function compter_mots3() {
    var compteur = document.getElementById('wordcount');
    var chaine = document.getElementById('texterea').value;
    var reg = /[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ-]{3,}/g;
    //var exp=new RegExp("[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ-]{0,3}[\'-]{0,1}+","g");

    var tabmots = chaine.match(reg);
    var nbMots = 123 - (chaine.split(/\b\w+\b/).length - 1)

    // Préparation de l'affichage du résultat 
    if (tabmots==null) {
        var affichage="123 mots";
    }
    else if (nbMots==1 | nbMots == 0) {
        var affichage=nbMots + " mot";
    } else if (nbMots == -1 ) {
        var affichage=nbMots + " mot";
    } else {
        var affichage= nbMots + " mots.";
    }
    //Affichage du résultat
    $('#wordcount').text(affichage);
    // si le résultat est négatif, le compteur devient rouge
    compteur.classList.toggle("textRouge", nbMots <= 0);
}

// reflexion sur affinement du résultat 
//function compter_mots4() {
//    var monTexte = document.getElementById('wordcount');
//    var chaine = document.getElementById('texterea').value;
//
//    //var reg = /[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ-]{3,}/g;
//
//    // First : traiter les mots tels que aujourd'hui
//    var reg = /.[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ_]*'. */g;
//
//    //var tabmots = chaine.match(reg);
//    var chaine2 = chaine.match(reg);
//    var chaine3 = chaine.replace(chaine2,"A");
//    // 2sd : traiter les mots tels que  contre-jour ...
//    var reg2 = /.[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ_]*-. */g;
//    //var tabmots = chaine.match(reg);
//    var chaine4 = chaine3.match(reg2);
//    var chaine5 = chaine3.replace(chaine4,"B");
//    // 3th : traiter les mots restants 
//    var reg3 = /[a-zA-Z0-9éèêëàáâäóòôöíìîïçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇ_]{1,}/g;
//    var tabmots = chaine5.match(reg3);
//
//    //la chaine5 contient le résultat final 
//    // tabMots le nombre de mots
//    var nbMots = (tabmots.length - 1)
//
//    // poursuivre avec l'affiche du résultat comme comter_mots3()....
//}





