// Récupération des données de l'api 

fetch ("http://localhost:3000/api/products")
// Après avoir reçu la réponse donne le résultat en json
   .then(response => response.json())
// Le résultat reçu traité en json sera appelé Produits
   .then((produits) => {
    // Montre moi dans la console les données récupérées sous forme de tableau.
    console.log(produits);
    // Appel de la fontion d'affichage des produits
    kanaps(produits);
   })

// Si il y a une erreur remplace le titre h1 par le contenu erreur 404 et renvoi l'erreur en console

.catch((error) => {
    document.querySelector(".titles").innerHTML = "Error 404";
    console.log("error 404");
});



function kanaps(index) {
    // Déclaration de la variable de la zone article
    let zoneArticle = document.querySelector("#items");
    // Boucle pour chaque indice appelé artcile dans l'index
    for (let article of index){
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