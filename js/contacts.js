/* 
Activité : gestion des contacts
Programmeur : Snervan (RetroMan sur OpenClassrooms)
Langage : JavaScript
Description : Affichage dans la console d'une liste de contacts et
			  ajout d'un contact dans l'objet listeContacts
*/

//Initialisation du tableau d'objets avec deux contacts
var listeContacts = [{
		nom : 'Lévisse',
		prenom: 'Carole'
	},
	{
		nom : 'Nelsonne',
		prenom: 'Mélodie'
	}];

console.log("Bienvenue dans le gestionnaire des contacts");

do {
	console.log("Tapez 2 pour afficher la liste des contacts\n"
		 		+ "Tapez 1 pour ajouter un contact\n"
		 		+ "Tapez 0 ou cliquez sur le bouton \"Annuler\" si vous voulez quitter le programme !");

	var choixOption = Number(prompt("Entrez votre option"));

	if(choixOption == 2) {
		console.log("Voilà la liste de tous vos contacts : ");

		listeContacts.forEach(function(contact) {
			console.log("Nom : " + contact.nom + ", Prénom : " + contact.prenom);
		});

		console.log(""); //Pour créer un « espace » entre deux affichages de la console
	}

	if (choixOption == 1) {

		//Les deux prompt permettant de saisir le nom et le prénom à ajouter
		var nomSaisie = prompt("Entrez un nom pour le contact :");
		var prenomSaisie = prompt("Entrez un prénom pour le contact :");

		//On ajoute le nouveau contact avec les identifiants correspondants
		listeContacts.push({ nom: nomSaisie, prenom: prenomSaisie });
		console.log("Votre nouveau contact a été ajoutée");
		console.log("");

	} else if (choixOption < 0 || choixOption > 2) {
		console.clear(); //Fonction "effacer l'écran" de la console
		console.log("L'option choisie n'existe pas\n");
	}

} while(choixOption != 0);

console.log("Programme terminé !");