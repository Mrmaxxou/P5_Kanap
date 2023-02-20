// Récupération des données de l'api 
fetch ("http://localhost:3000/api/products")
// Après avoir reçu la réponse donne le résultat en json
   .then(response => response.json())
// Le résultat reçu traité en json sera appelé produits
   .then((produits) => {
    // Montre moi dans la console les données récupérées sous forme de tableau.
    console.log(produits);
    // Appel de la fontion d'affichage des produits
    loadProduits(produits);
   })
   // Si il y a une erreur renvoi l'erreur en console et viens remplacer le h1 par error 404
   .catch((error) => {
    document.querySelector(".titles").innerHTML = "<h1>Error 404</h1>";
    console.log("error 404");
});

function loadProduits(produits) {
    // Déclaration de la variable de la zone article
    let zoneArticle = document.querySelector("#items");
    // Boucle pour chaque indice appelé article dans l'index
    for (let article of produits){
        // Création et ajout de l'article 
        zoneArticle.innerHTML += `<a href="./product.html?_id=${article._id}">
            <article>
                <img src="${article.imageUrl}" alt="${article.altTxt}">
                <h3 class="productName">${article.name}</h3>
                <p class="productDescription">${article.description}</p>
            </article>
        </a>`;
    }
}