//Récupération de la chaîne de requête dans l'URL
const productIdUrl = window.location.search;
console.log(productIdUrl);

// Extraction de l'id 
let productId = new URLSearchParams(productIdUrl);
console.log(productId);

const id = productId.get('_id');
console.log(id);

//Création de l'URL de recherche dans l'API
const requete = new XMLHttpRequest()
const methodeHttp= "GET"
const url = "http://localhost:3000/api/products/"+id
console.log(url)

// Recherche des informations avec L'URL lié à L'Id dans l'API

fetch (url)
// Après avoir reçu la réponse donne le résultat en json
   .then(response => response.json())
// Le résultat reçu traité en json sera appelé Produits
   .then((productIdData) => {
    // Montre moi dans la console les données récupérées sous forme de tableau.
    console.log(productIdData);
    // Appel de la fontion d'affichage des produits
    loadData(productIdData);
   })
// Si il y a une erreur envoi l'erreur en console
.catch((error) => {
   console.log(error);
});


// Fonction affichage des données présente dans l'API avec l'id du produit

function loadData(productIdData) {
   if (productIdData != null) {
      let 
      data = document.querySelector('.item__img');
      data.innerHTML += `<img src="${productIdData.imageUrl}" alt="${productIdData.altTxt}">`;

      data = document.querySelector('#title');
      data.textContent = productIdData.name;

      data = document.querySelector('#price');
      data.textContent = productIdData.price;

      data = document.querySelector('#description');
      data.textContent = productIdData.description;


      for (let i=0; i < productIdData.colors.length; i++) {
         colorsChoice(productIdData.colors[i]);

   }
}
}

// Fonction création des couleurs disponible pour la balise option

function colorsChoice(colorChoice) {
   const colorOption = document.createElement('option');
   colorOption.value = colorChoice;
   colorOption.textContent = colorChoice;
   const parent = document.querySelector('#colors');
   parent.appendChild(colorOption);
}

