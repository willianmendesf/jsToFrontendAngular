// EXEMPLO REAL
fetch('https://api.punkapi.com/v2/beers/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));