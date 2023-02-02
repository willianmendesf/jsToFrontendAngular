const radioApi = "http://at1.api.radio-browser.info/json/countries";

fetch(radioApi)
  .then(data=>data.json())
    .then(data => console.log(data))
      .finally(()=> console.log("sua busca terminou!"))