//Récupération de la chaîne de requête dans l'URL
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

// Extraction de l'id 
let urlSearchparams = new URLSearchParams(queryString_url_id);
console.log(urlSearchparams);

const id = urlSearchparams.get('_id');
console.log(id);


