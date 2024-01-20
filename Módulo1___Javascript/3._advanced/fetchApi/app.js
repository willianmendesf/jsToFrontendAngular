

// Fetch é uma função do JavaScript que permite enviar solicitações HTTP assíncronas para um servidor web e obter uma resposta. 
// É uma maneira moderna de realizar operações de rede em navegadores da web, substituindo as antigas APIs XMLHttpRequest (XHR).

// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

// Exemplo 1 - recuperando dados de uma API
fetch('https://api.exemplo.com/data')
  .then(response => response.json()) // convertendo retorno para json.
  .then(data => console.log(data))   // expondo/usando nosso dado retornado e tratado.
  .catch(error => console.error(error)); // validação para dar retorno se houver error.



// Exemplo 2 - enviando dados para uma API
const data = { username: 'john.doe', password: 's3cr3t' };

fetch('https://api.exemplo.com/login', {
  method: 'POST', // metodo da requisição
  headers: { 'Content-Type': 'application/json' }, // tipo ou formato em que o dado é trafegado
  body: JSON.stringify(data) // esta convertendo o json para string.
})
  .then(response => response.json()) // convertendo retorno para json.
  .then(data => console.log(data)) // expondo/usando nosso dado retornado e tratado.
  .catch(error => console.error(error)); // validação para dar retorno se houver error.